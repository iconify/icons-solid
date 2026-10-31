import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/v5ekabbtd.css';
import '../../css/e/eqknc-1gp.css';
import '../../css/q/qejtp6x8k.css';
import '../../css/t/tlh6wgnmm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="v5ekabbtd wm-shadow"/><path class="eqknc-1gp wm-shadow"/><path class="qejtp6x8k"/><path class="tlh6wgnmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:lamp-desk"} {...others} />);
}

export default Component;
