import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lq98x_bxd.css';
import '../../css/l/ltenu6dbq.css';
import '../../css/e/er6tn7e0u.css';
import '../../css/b/bfvrotjgs.css';
import '../../css/u/u4l92b44u.css';
import '../../css/g/gffip5ieg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="lq98x_bxd wm-shadow"/><path class="ltenu6dbq"/><path class="er6tn7e0u"/><path class="bfvrotjgs"/><path class="u4l92b44u"/><path class="gffip5ieg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:thermometer-sun"} {...others} />);
}

export default Component;
