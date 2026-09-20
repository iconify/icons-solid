import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bf-cksb2n.css';
import '../../css/g/geacapbia.css';
import '../../css/k/krmw3db2e.css';
import '../../css/s/sddor0m5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bf-cksb2n"/><path class="geacapbia"/><path clip-rule="evenodd" class="krmw3db2e"/><path clip-rule="evenodd" class="sddor0m5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sale-square-outline"} {...others} />);
}

export default Component;
