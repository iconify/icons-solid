import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c6ln5dhkd.css';
import '../../css/d/d50362z8x.css';
import '../../css/a/avpiuxbvf.css';
import '../../css/h/hg7t_3q-f.css';
import '../../css/x/x5jqk5i0p.css';
import '../../css/i/in1ml66mw.css';
import '../../css/x/xnrnw2yra.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="c6ln5dhkd wm-shadow"/><path class="d50362z8x"/><path class="avpiuxbvf"/><path class="hg7t_3q-f"/><path class="x5jqk5i0p"/><path class="in1ml66mw wm-deco"/><path class="xnrnw2yra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:rose-bouquet"} {...others} />);
}

export default Component;
