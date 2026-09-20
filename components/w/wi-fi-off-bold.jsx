import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dtdvs6bwi.css';
import '../../css/v/v4cxfwahk.css';
import '../../css/h/h4sdbs22x.css';
import '../../css/l/l89afdc_q.css';
import '../../css/a/apv81ybrl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dtdvs6bwi"/><path class="v4cxfwahk"/><path class="h4sdbs22x"/><path class="l89afdc_q"/><path class="apv81ybrl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-off-bold"} {...others} />);
}

export default Component;
