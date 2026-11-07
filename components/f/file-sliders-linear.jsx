import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u_p8_wgxf.css';
import '../../css/v/vw_dbzb_q.css';
import '../../css/b/b22-7qb1v.css';
import '../../css/j/jretqrblw.css';
import '../../css/u/umqcyqb_p.css';
import '../../css/d/d-7t5zb4e.css';
import '../../css/e/e0cmz0boh.css';
import '../../css/z/zr35ecbmr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="u_p8_wgxf"/><path class="vw_dbzb_q"/><path class="b22-7qb1v"/><path class="jretqrblw"/><path class="umqcyqb_p"/><path class="d-7t5zb4e"/><path class="e0cmz0boh"/><path class="zr35ecbmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-sliders-linear"} {...others} />);
}

export default Component;
