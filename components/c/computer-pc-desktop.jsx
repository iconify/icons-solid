import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mmy6ppbub.css';
import '../../css/k/k-xbkynct.css';
import '../../css/x/x2-ltettm.css';
import '../../css/w/wjoocfixt.css';
import '../../css/i/i1rj8ub5j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="mmy6ppbub"/><path class="k-xbkynct"/><path class="x2-ltettm"/><path class="wjoocfixt"/><path class="i1rj8ub5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:computer-pc-desktop"} {...others} />);
}

export default Component;
