import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l6fn0fb1j.css';
import '../../css/l/ldjg42xkf.css';
import '../../css/m/mb74phb2i.css';
import '../../css/j/jokz056ng.css';
import '../../css/v/veh8-ybej.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="l6fn0fb1j"/><path class="ldjg42xkf"/><path class="mb74phb2i"/><path class="jokz056ng"/><path class="veh8-ybej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-open-play-line-duotone"} {...others} />);
}

export default Component;
