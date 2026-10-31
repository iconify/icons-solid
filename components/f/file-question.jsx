import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/k/kvd_5xbtu.css';
import '../../css/a/ad5mbrb2l.css';
import '../../css/p/pylthn_wp.css';
import '../../css/a/aep5ismwv.css';
import '../../css/a/aq07l9izx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="kvd_5xbtu"/><path class="ad5mbrb2l"/><path class="pylthn_wp"/><path class="aep5ismwv"/><path class="aq07l9izx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:file-question"} {...others} />);
}

export default Component;
