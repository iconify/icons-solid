import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usz420qgc.css';
import '../../css/k/kdeow8k2g.css';
import '../../css/z/zw5w2lbvd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="usz420qgc"><path class="kdeow8k2g"/><path class="zw5w2lbvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bike-bold"} {...others} />);
}

export default Component;
