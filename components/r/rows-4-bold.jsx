import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ibrcm0b3s.css';
import '../../css/w/wdipljbrd.css';
import '../../css/x/xsl5v7bfz.css';
import '../../css/u/udovdvbge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ibrcm0b3s"/><path class="wdipljbrd"/><path class="xsl5v7bfz"/><path class="udovdvbge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rows-4-bold"} {...others} />);
}

export default Component;
