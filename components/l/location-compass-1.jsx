import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a8gps4bht.css';
import '../../css/c/c-dlmxm4t.css';
import '../../css/r/rtgrnjbsf.css';
import '../../css/x/xjfc-xbtr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a8gps4bht"/><path class="c-dlmxm4t"/><path class="rtgrnjbsf"/><path class="xjfc-xbtr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:location-compass-1"} {...others} />);
}

export default Component;
