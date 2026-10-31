import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/t58iwdbnr.css';
import '../../css/c/clgy2ivjb.css';
import '../../css/f/fu26y-b5x.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/s/saj-w1fxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="t58iwdbnr"/><path class="clgy2ivjb"/><path class="fu26y-b5x wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="saj-w1fxq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:target"} {...others} />);
}

export default Component;
