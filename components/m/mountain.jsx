import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ryw_qxplx.css';
import '../../css/i/intizwbyl.css';
import '../../css/r/r_fe4p1lj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ryw_qxplx"/><path class="intizwbyl"/><path class="r_fe4p1lj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mountain"} {...others} />);
}

export default Component;
