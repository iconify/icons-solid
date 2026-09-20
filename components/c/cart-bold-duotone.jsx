import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/m/me44qacwj.css';
import '../../css/f/fpb37bc7d.css';
import '../../css/i/iwr_mlcbj.css';
import '../../css/j/jfifsfbrn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="me44qacwj"/><path class="fpb37bc7d"/></g><path class="iwr_mlcbj"/><path class="jfifsfbrn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-bold-duotone"} {...others} />);
}

export default Component;
