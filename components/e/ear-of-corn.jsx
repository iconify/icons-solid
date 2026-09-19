import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ptg01b2nr.css';
import '../../css/a/a5l7l5b-b.css';
import '../../css/k/kv6hvkh0l.css';
import '../../css/z/z_zma3vub.css';
import '../../css/e/e1cntybqg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ptg01b2nr"/><path class="a5l7l5b-b"/><path class="kv6hvkh0l"/><path class="z_zma3vub"/><path class="e1cntybqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:ear-of-corn"} {...others} />);
}

export default Component;
