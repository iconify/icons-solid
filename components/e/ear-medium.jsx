import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uzjs-rb7b.css';
import '../../css/l/lc5gbrbdy.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="uzjs-rb7b"/><path class="lc5gbrbdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:ear-medium"} {...others} />);
}

export default Component;
