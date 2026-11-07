import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/awr1zxi0y.css';
import '../../css/d/dh-362btw.css';
import '../../css/u/uniftz_yv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="awr1zxi0y"/><path class="dh-362btw"/><path class="uniftz_yv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:armchair-line-duotone"} {...others} />);
}

export default Component;
