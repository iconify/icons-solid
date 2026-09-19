import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/l/ld30g871v.css';
import '../../css/y/ywa5aqr7m.css';
import '../../css/x/xbhes0ulq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="ld30g871v"/><path class="ywa5aqr7m"/><path class="xbhes0ulq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:map-marker-line"} {...others} />);
}

export default Component;
