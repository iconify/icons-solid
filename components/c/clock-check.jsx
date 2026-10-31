import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/aiu845qjl.css';
import '../../css/x/x3u7i-4uc.css';
import '../../css/r/r1r6qcbsq.css';
import '../../css/k/k3ijxl9uy.css';
import '../../css/b/b7dlrofzf.css';
import '../../css/h/hhalcmpnd.css';
import '../../css/k/ka-0gpyza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="aiu845qjl wm-shadow"/><path class="x3u7i-4uc"/><path class="r1r6qcbsq"/><path class="k3ijxl9uy"/><path class="b7dlrofzf"/><path class="hhalcmpnd"/><path class="ka-0gpyza wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:clock-check"} {...others} />);
}

export default Component;
