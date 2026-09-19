import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wwqombcpz.css';
import '../../css/k/kbivwbgjc.css';
import '../../css/k/kp-bi2n2c.css';
import '../../css/e/e70y-4bza.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="wwqombcpz"/><path clip-rule="evenodd" class="kbivwbgjc"/><path class="kp-bi2n2c"/><path clip-rule="evenodd" class="e70y-4bza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:align-items-side-outline"} {...others} />);
}

export default Component;
