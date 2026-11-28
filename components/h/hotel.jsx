import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h0tq4hvtq.css';
import '../../css/d/d3_wcs55v.css';
import '../../css/u/usc59bjvb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="h0tq4hvtq"/><path class="d3_wcs55v"/><path class="usc59bjvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:hotel"} {...others} />);
}

export default Component;
