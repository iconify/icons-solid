import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fni4lzbcb.css';
import '../../css/w/whf6q0-lx.css';
import '../../css/j/jjctyybcj.css';
import '../../css/k/kzz2abcpr.css';
import '../../css/k/kkpnesg6t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="fni4lzbcb"><path class="whf6q0-lx wm-shadow"/><path class="jjctyybcj wm-a"/><path class="kzz2abcpr wm-shadow"/><path class="kkpnesg6t wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:copy"} {...others} />);
}

export default Component;
