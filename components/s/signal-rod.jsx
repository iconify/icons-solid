import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/a/ag3gp6mhp.css';
import '../../css/n/n07-27byw.css';
import '../../css/i/i4xctmb2r.css';
import '../../css/m/mgqg-pzmx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="ag3gp6mhp"/><circle class="n07-27byw"/><path class="i4xctmb2r"/><path class="mgqg-pzmx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:signal-rod"} {...others} />);
}

export default Component;
