import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfnlz1bwm.css';
import '../../css/y/yvav3etyo.css';
import '../../css/k/kx7lj1yvv.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="jfnlz1bwm"><path class="yvav3etyo"/><circle class="kx7lj1yvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:ionic"} {...others} />);
}

export default Component;
