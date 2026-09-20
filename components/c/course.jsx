import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p9vm-c55o.css';
import '../../css/c/coboeh8eb.css';
import '../../css/c/cupcblbeg.css';
import '../../css/v/vrfvb-uky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p9vm-c55o"/><path class="coboeh8eb"/><path class="cupcblbeg"/><path class="vrfvb-uky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:course"} {...others} />);
}

export default Component;
