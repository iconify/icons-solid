import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aaut4epsv.css';
import '../../css/p/p655zvzpk.css';
import '../../css/a/a7_6t4bxt.css';
import '../../css/z/z54hrlbul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="aaut4epsv"/><path class="p655zvzpk"/><path class="a7_6t4bxt"/><path class="z54hrlbul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-snowfall-broken"} {...others} />);
}

export default Component;
