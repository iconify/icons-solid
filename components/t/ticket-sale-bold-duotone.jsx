import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/va3-4tb_v.css';
import '../../css/c/cmenmmbqh.css';
import '../../css/p/pyxafgb6o.css';
import '../../css/r/r-zgg0p3j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="va3-4tb_v"/><path class="cmenmmbqh"/><path class="pyxafgb6o"/><path class="r-zgg0p3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ticket-sale-bold-duotone"} {...others} />);
}

export default Component;
