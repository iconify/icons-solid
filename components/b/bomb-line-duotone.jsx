import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uac092bgj.css';
import '../../css/d/d_hcm7xrk.css';
import '../../css/r/rn08x5brb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="uac092bgj"/><path class="d_hcm7xrk"/><path class="rn08x5brb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bomb-line-duotone"} {...others} />);
}

export default Component;
