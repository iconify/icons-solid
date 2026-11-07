import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v3g6xoxym.css';
import '../../css/e/exgld-b-f.css';
import '../../css/i/iok8l6mas.css';
import '../../css/k/k0j6oyc4l.css';
import '../../css/n/n1_ykhn3f.css';
import '../../css/d/d20-0wyrx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="v3g6xoxym"/><path class="exgld-b-f"/><path class="iok8l6mas"/><path class="k0j6oyc4l"/><path class="n1_ykhn3f"/><path class="d20-0wyrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:diploma-linear"} {...others} />);
}

export default Component;
