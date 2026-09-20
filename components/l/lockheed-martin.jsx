import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_q856ksm.css';
import '../../css/g/gxlt_cd2r.css';
import '../../css/d/dpcjy1biw.css';
import '../../css/q/qu3gfli0b.css';

const viewBox = {"width":2131.92,"height":322.04};
const content = `<path class="y_q856ksm"/><g class="gxlt_cd2r"><path class="dpcjy1biw"/><path class="qu3gfli0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:lockheed-martin"} {...others} />);
}

export default Component;
