import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y16htcc9n.css';
import '../../css/m/mf5p_6brd.css';
import '../../css/p/pq4q25tmp.css';
import '../../css/a/a45nskk5a.css';
import '../../css/d/dj_k2-c7p.css';
import '../../css/v/v3f9imx-l.css';
import '../../css/t/t1ldtcc1k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k y16htcc9n"/><path class="mf5p_6brd wm-deco"/><path class="pq4q25tmp wm-k"/><path class="a45nskk5a wm-k"/><path class="dj_k2-c7p wm-shadow"/><path class="v3f9imx-l wm-shine"/><path class="t1ldtcc1k wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:snow-globe"} {...others} />);
}

export default Component;
