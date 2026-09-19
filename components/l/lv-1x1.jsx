import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/erzf03bmv.css';
import '../../css/w/wmyfswd2k.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="d2kvgvbvc"><path class="erzf03bmv"/><path class="wmyfswd2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:lv-1x1"} {...others} />);
}

export default Component;
