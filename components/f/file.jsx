import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/r/ruc-ryb6n.css';
import '../../css/y/ynhokbbkv.css';
import '../../css/t/tej44k3ii.css';
import '../../css/m/mhz3m8b7r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="ruc-ryb6n"/><path class="ynhokbbkv"/><path class="tej44k3ii"/><path class="mhz3m8b7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:file"} {...others} />);
}

export default Component;
