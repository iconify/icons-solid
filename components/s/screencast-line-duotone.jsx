import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dhlp-zbpr.css';
import '../../css/s/sdldar-9p.css';
import '../../css/y/yaqv4iv0o.css';
import '../../css/z/zwy84xboo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dhlp-zbpr"/><path class="sdldar-9p"/><path class="yaqv4iv0o"/><path class="zwy84xboo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:screencast-line-duotone"} {...others} />);
}

export default Component;
