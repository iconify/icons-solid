import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/n/niii5kq6o.css';
import '../../css/k/k2yb1ygog.css';
import '../../css/m/mqoqnes6d.css';
import '../../css/r/rfghr8zjy.css';
import '../../css/j/j13_cqbrn.css';
import '../../css/b/bky1yqbnk.css';
import '../../css/u/ut8xo_b0e.css';
import '../../css/f/fduvtpkpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="niii5kq6o"/><path class="k2yb1ygog"/><path class="mqoqnes6d wm-shine"/><path class="rfghr8zjy wm-k"/><path class="j13_cqbrn wm-a"/><path class="bky1yqbnk"/><path class="ut8xo_b0e"/><path class="fduvtpkpx wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:life-buoy"} {...others} />);
}

export default Component;
