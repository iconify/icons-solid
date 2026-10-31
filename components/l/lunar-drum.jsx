import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zkn8wzkji.css';
import '../../css/q/qgq8y23lq.css';
import '../../css/u/uoju-z_9h.css';
import '../../css/s/sla9ccbde.css';
import '../../css/p/pnqfu2f1y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="zkn8wzkji"/><path class="qgq8y23lq wm-k"/><path class="uoju-z_9h wm-a"/><path class="sla9ccbde wm-s"/><path class="pnqfu2f1y wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:lunar-drum"} {...others} />);
}

export default Component;
