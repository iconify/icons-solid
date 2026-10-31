import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hzhjasret.css';
import '../../css/m/moec6mbkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="hzhjasret wm-k"/><path class="moec6mbkt wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gallery-horizontal-gloss"} {...others} />);
}

export default Component;
