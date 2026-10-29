import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e3728q2fv.css';
import '../../css/j/j1tznqzdp.css';
import '../../css/y/ykgkceq4i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="e3728q2fv"/><path class="j1tznqzdp wm-k"/><path class="wm-a ykgkceq4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:footprints-sketch"} {...others} />);
}

export default Component;
