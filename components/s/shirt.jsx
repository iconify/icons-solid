import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/z/z29j2qe4e.css';
import '../../css/q/qd1m3lmpc.css';
import '../../css/x/x2778xekb.css';
import '../../css/a/apdcwjopg.css';
import '../../css/d/dvcohwdsk.css';
import '../../css/e/eb3is_b3o.css';
import '../../css/m/mnrk1p4yr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="z29j2qe4e"/><path class="qd1m3lmpc"/><path class="wm-shine x2778xekb"/><path class="apdcwjopg"/><path class="dvcohwdsk"/><path class="eb3is_b3o"/><path class="mnrk1p4yr wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:shirt"} {...others} />);
}

export default Component;
