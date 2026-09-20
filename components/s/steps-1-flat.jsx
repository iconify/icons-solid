import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnxi2rbnm.css';
import '../../css/s/swm2e_bdf.css';
import '../../css/v/v3k9cy9kd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wnxi2rbnm"><path clip-rule="evenodd" class="swm2e_bdf"/><path class="v3k9cy9kd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:steps-1-flat"} {...others} />);
}

export default Component;
