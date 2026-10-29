import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j19i-bchg.css';
import '../../css/e/e0yn24vsm.css';
import '../../css/m/mvviabl6i.css';
import '../../css/j/jc3t-rc-r.css';
import '../../css/p/pi31t30ed.css';
import '../../css/l/lt-1xj_ez.css';
import '../../css/t/tcv4l1b3p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j19i-bchg wm-shadow"/><path class="e0yn24vsm wm-k"/><path class="mvviabl6i wm-k"/><path class="jc3t-rc-r wm-k"/><path class="pi31t30ed wm-k"/><path class="lt-1xj_ez wm-k"/><path class="tcv4l1b3p wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:bone"} {...others} />);
}

export default Component;
