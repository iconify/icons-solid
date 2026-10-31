import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/p/p6wahxbgz.css';
import '../../css/q/qd1m3lmpc.css';
import '../../css/w/w900bojzk.css';
import '../../css/z/z2x9h7gyn.css';
import '../../css/o/ozmxtfq6v.css';
import '../../css/r/rs7ge8bth.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="p6wahxbgz"/><path class="qd1m3lmpc"/><path class="w900bojzk wm-shine"/><path class="z2x9h7gyn"/><path class="ozmxtfq6v"/><path class="rs7ge8bth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:triangle"} {...others} />);
}

export default Component;
