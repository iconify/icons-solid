import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b9jjwibop.css';
import '../../css/q/qbtwt8h2g.css';
import '../../css/d/d3o853lww.css';
import '../../css/t/tnssgcgfm.css';
import '../../css/u/uoi4civ0t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b9jjwibop wm-shadow"/><path class="qbtwt8h2g"/><path class="d3o853lww"/><path class="tnssgcgfm"/><path class="uoi4civ0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:vr-headset"} {...others} />);
}

export default Component;
