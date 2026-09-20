import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l--oi22kl.css';
import '../../css/q/q7__kib4o.css';
import '../../css/x/x6y_sybsh.css';
import '../../css/q/qgfd6sb9e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l--oi22kl"/><path class="q7__kib4o"/><path class="x6y_sybsh"/><path class="qgfd6sb9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:cpu"} {...others} />);
}

export default Component;
