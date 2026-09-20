import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t-ii8ac4d.css';
import '../../css/y/y0mw4ibgt.css';
import '../../css/i/im1hkobej.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="t-ii8ac4d"/><path class="y0mw4ibgt"/><path class="im1hkobej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:laptop-minimalistic-broken"} {...others} />);
}

export default Component;
