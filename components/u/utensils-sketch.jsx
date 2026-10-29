import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/by7lzdb6d.css';
import '../../css/i/i-148iksi.css';
import '../../css/g/gmx4ak5hr.css';
import '../../css/x/xj8yknp_a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="by7lzdb6d wm-k"/><path class="i-148iksi wm-a"/><path class="gmx4ak5hr wm-k"/><path class="wm-a xj8yknp_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:utensils-sketch"} {...others} />);
}

export default Component;
