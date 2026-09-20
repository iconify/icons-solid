import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qft7asx9b.css';
import '../../css/m/mfgkvkb1j.css';
import '../../css/b/bwkbvwbdm.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="qft7asx9b"/><path class="mfgkvkb1j"/><path class="bwkbvwbdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:brightness-4"} {...others} />);
}

export default Component;
