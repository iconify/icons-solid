import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvwm3wm-l.css';
import '../../css/z/zgyoyfbth.css';
import '../../css/v/vsqobsshi.css';
import '../../css/x/xagkgcbsq.css';
import '../../css/j/jfn9918qi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bvwm3wm-l"/><path class="zgyoyfbth"/><path class="vsqobsshi"/><path class="xagkgcbsq"/><path class="jfn9918qi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:email"} {...others} />);
}

export default Component;
