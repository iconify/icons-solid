import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ie3nmnb4k.css';
import '../../css/m/m99yuxjsm.css';
import '../../css/r/rn08x5brb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ie3nmnb4k"/><path class="m99yuxjsm"/><path class="rn08x5brb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bomb-broken"} {...others} />);
}

export default Component;
