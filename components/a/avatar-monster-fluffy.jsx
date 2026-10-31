import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/r0xfl91vb.css';
import '../../css/s/s8xyq2bri.css';
import '../../css/w/wy6io9wqf.css';
import '../../css/b/bgmye-hxv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="r0xfl91vb wm-shadow"/><path class="s8xyq2bri wm-shadow"/><path class="wy6io9wqf"/><path class="bgmye-hxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-monster-fluffy"} {...others} />);
}

export default Component;
