import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bknvfvbng.css';
import '../../css/q/qmjmvubhz.css';
import '../../css/s/sdf4ccc-d.css';
import '../../css/v/vbhw-1bec.css';
import '../../css/o/o2vm0kbuj.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="bknvfvbng"/><path class="qmjmvubhz"/><path class="sdf4ccc-d wm-shine"/><path class="vbhw-1bec wm-k"/><path class="o2vm0kbuj wm-a"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:projector"} {...others} />);
}

export default Component;
