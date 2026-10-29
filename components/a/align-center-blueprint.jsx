import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/ybfqy0wjb.css';
import '../../css/m/mhdr543mh.css';
import '../../css/b/bkja6hbdm.css';
import '../../css/a/abddbewdp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco ybfqy0wjb"/><path class="mhdr543mh wm-deco"/><path class="bkja6hbdm"/><path class="abddbewdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:align-center-blueprint"} {...others} />);
}

export default Component;
