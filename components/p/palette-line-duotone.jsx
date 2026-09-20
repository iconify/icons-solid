import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/idco1xbej.css';
import '../../css/r/rifo2czrt.css';
import '../../css/h/hq7o26lao.css';
import '../../css/m/mlq66nbgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="idco1xbej"/><path class="rifo2czrt"/><path class="hq7o26lao"/><path class="mlq66nbgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:palette-line-duotone"} {...others} />);
}

export default Component;
