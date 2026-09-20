import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/w0tbizb6v.css';
import '../../css/u/uq1a7euhz.css';
import '../../css/k/k5ha-2b_m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="w0tbizb6v"/><path class="uq1a7euhz"/><path clip-rule="evenodd" class="k5ha-2b_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cctv-sharp-duotone"} {...others} />);
}

export default Component;
