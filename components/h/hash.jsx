import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rzk031b4a.css';
import '../../css/d/dns_8jbpx.css';
import '../../css/h/hdo5hq__j.css';
import '../../css/t/ta9496p1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="rzk031b4a wm-shadow"/><path class="dns_8jbpx wm-shadow"/><path class="hdo5hq__j"/><path class="ta9496p1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:hash"} {...others} />);
}

export default Component;
