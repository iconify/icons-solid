import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lb-mybcgs.css';
import '../../css/t/tg6vyv3do.css';
import '../../css/j/jct4a2bzg.css';
import '../../css/v/vigqkobhn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lb-mybcgs"/><path class="tg6vyv3do"/><path class="jct4a2bzg"/><path class="vigqkobhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:case-linear"} {...others} />);
}

export default Component;
