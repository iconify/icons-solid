import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_8fc5nqz.css';
import '../../css/z/zp1q72bti.css';
import '../../css/n/nvs_mocnt.css';
import '../../css/v/vdwwz320h.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="i_8fc5nqz"/><path class="zp1q72bti"/><path class="nvs_mocnt"/><path class="vdwwz320h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:credit-card-2"} {...others} />);
}

export default Component;
