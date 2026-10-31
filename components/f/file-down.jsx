import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/b/b8l3r5bbd.css';
import '../../css/y/yqo922b3k.css';
import '../../css/u/uy-4znbbx.css';
import '../../css/t/tyrgbm31w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="b8l3r5bbd"/><path class="yqo922b3k"/><path class="uy-4znbbx"/><path class="tyrgbm31w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:file-down"} {...others} />);
}

export default Component;
