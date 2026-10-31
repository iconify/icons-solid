import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xu_rjcven.css';
import '../../css/y/yrfmaj0av.css';
import '../../css/r/r_x1-gbmn.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="xu_rjcven"/><path class="yrfmaj0av"/><path class="r_x1-gbmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ws"} {...others} />);
}

export default Component;
