import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xsnor2bny.css';
import '../../css/b/b1itxrggd.css';
import '../../css/l/l2w4wwbeb.css';
import '../../css/r/r5wubrbkl.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="xsnor2bny"/><path class="b1itxrggd"/><path class="l2w4wwbeb"/><path class="r5wubrbkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:mu"} {...others} />);
}

export default Component;
