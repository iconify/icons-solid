import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r_72uo4ps.css';
import '../../css/s/swy39gl-j.css';
import '../../css/z/zaxqhcb-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r_72uo4ps"/><path clip-rule="evenodd" class="swy39gl-j"/><path class="zaxqhcb-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-point-school-bold"} {...others} />);
}

export default Component;
