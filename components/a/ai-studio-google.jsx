import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xreo-vkxv.css';
import '../../css/y/yrtrqejse.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="xreo-vkxv"/><path class="yrtrqejse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ai-studio-google"} {...others} />);
}

export default Component;
