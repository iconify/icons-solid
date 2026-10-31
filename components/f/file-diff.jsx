import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/o/ojo7aabmx.css';
import '../../css/y/yzvn82b5x.css';
import '../../css/a/a7d4ic-4c.css';
import '../../css/t/t-ksozgnh.css';
import '../../css/r/r2usqhbgf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="ojo7aabmx"/><path class="yzvn82b5x"/><path class="a7d4ic-4c"/><path class="t-ksozgnh"/><path class="r2usqhbgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:file-diff"} {...others} />);
}

export default Component;
