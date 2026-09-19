import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v77by5bhg.css';
import '../../css/g/gn3-mt02q.css';
import '../../css/t/t_m6p_8jv.css';
import '../../css/h/hummpf6nc.css';
import '../../css/x/xl09ocbfw.css';
import '../../css/s/srib1rb_v.css';
import '../../css/r/rp91oob5v.css';
import '../../css/u/ux4t-mzwd.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><rect class="v77by5bhg"/><rect class="gn3-mt02q"/><rect class="t_m6p_8jv"/><rect class="hummpf6nc"/><rect class="xl09ocbfw"/><rect class="srib1rb_v"/><rect class="rp91oob5v"/><rect class="ux4t-mzwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:grip-16"} {...others} />);
}

export default Component;
