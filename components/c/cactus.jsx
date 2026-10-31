import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x0hdwdb7p.css';
import '../../css/h/hyfam9bue.css';
import '../../css/j/j5i5x0bdb.css';
import '../../css/f/f467v-_hb.css';
import '../../css/u/ua4xvhoij.css';
import '../../css/o/o077ofbzm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow x0hdwdb7p"/><path class="hyfam9bue"/><path class="j5i5x0bdb"/><path class="f467v-_hb"/><path class="ua4xvhoij"/><path class="o077ofbzm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cactus"} {...others} />);
}

export default Component;
