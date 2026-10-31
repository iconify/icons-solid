import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/x/xv27o_e0w.css';
import '../../css/q/qhvdtrqmw.css';
import '../../css/q/q56y233js.css';
import '../../css/g/gpwovhbpc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="xv27o_e0w"/><path class="qhvdtrqmw wm-shine"/><path class="q56y233js wm-k"/><path class="gpwovhbpc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:butterfly"} {...others} />);
}

export default Component;
