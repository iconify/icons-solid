import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/exlcxc65p.css';
import '../../css/y/yd_z_xzbl.css';
import '../../css/d/dxy15jbvi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="exlcxc65p"/><path class="yd_z_xzbl"/><path clip-rule="evenodd" class="dxy15jbvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:nutrition-24px"} {...others} />);
}

export default Component;
