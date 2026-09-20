import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u8_lrlbzs.css';
import '../../css/q/qa5-w9hvv.css';
import '../../css/w/w6ov1vbdz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="u8_lrlbzs"/><path class="qa5-w9hvv"/><path class="w6ov1vbdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:wave-signal-square"} {...others} />);
}

export default Component;
