import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/l/l0co2u7la.css';
import '../../css/x/x0jzvh7gh.css';
import '../../css/p/p17mk_b2e.css';
import '../../css/s/sp_ow-b-f.css';
import '../../css/q/qc2zrhgbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="l0co2u7la"/><path class="x0jzvh7gh"/><path class="p17mk_b2e"/><path class="sp_ow-b-f"/><path class="qc2zrhgbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:file-archive"} {...others} />);
}

export default Component;
