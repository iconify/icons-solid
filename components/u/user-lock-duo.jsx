import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a_0c-vozs.css';
import '../../css/n/nexbjnbng.css';
import '../../css/r/rkrwd5pdm.css';
import '../../css/l/ljeitrr-k.css';
import '../../css/y/ybhe00r-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="a_0c-vozs"/><path class="nexbjnbng wm-s"/><path class="rkrwd5pdm wm-s"/><path class="ljeitrr-k"/><path class="wm-a ybhe00r-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-lock-duo"} {...others} />);
}

export default Component;
