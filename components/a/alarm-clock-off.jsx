import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zol5qs1pg.css';
import '../../css/b/b3w9-obrf.css';
import '../../css/p/plp-s2ydl.css';
import '../../css/w/w40h1pb5g.css';
import '../../css/o/ohtj0i3jo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-k zol5qs1pg"/><path class="b3w9-obrf wm-a"/><path class="plp-s2ydl"/><path class="w40h1pb5g"/><path class="ohtj0i3jo wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:alarm-clock-off"} {...others} />);
}

export default Component;
