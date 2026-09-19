import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yhnpw4bci.css';
import '../../css/i/if2u9sbmf.css';
import '../../css/s/sk_1xlfqv.css';
import '../../css/r/rsouw_b6y.css';
import '../../css/z/z7n50vb6p.css';
import '../../css/g/gnqbrwble.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yhnpw4bci"/><path class="if2u9sbmf"/><path class="sk_1xlfqv"/><path class="rsouw_b6y"/><path class="z7n50vb6p"/><path class="gnqbrwble"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:bowling"} {...others} />);
}

export default Component;
