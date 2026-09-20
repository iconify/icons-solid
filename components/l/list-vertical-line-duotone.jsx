import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gy2469b1p.css';
import '../../css/u/u29udfb1o.css';
import '../../css/j/jgx5nz-xl.css';
import '../../css/r/r9gp_ab3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="gy2469b1p"/><path class="u29udfb1o"/><path class="jgx5nz-xl"/><path class="r9gp_ab3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-vertical-line-duotone"} {...others} />);
}

export default Component;
