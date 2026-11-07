import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ehz7_oblv.css';
import '../../css/q/qds604bnv.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/r/rww_ujanv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ehz7_oblv"/><path class="qds604bnv"/><circle class="h_tsn8bxt"/><path class="rww_ujanv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:translation-2-linear"} {...others} />);
}

export default Component;
