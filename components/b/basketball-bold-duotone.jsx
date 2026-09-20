import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ida3dab7o.css';
import '../../css/p/p6yrz0b3y.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/o/ow95c6k3i.css';
import '../../css/c/cf2_2ceon.css';
import '../../css/s/sw2kbc_hw.css';
import '../../css/d/d2u2ibczd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ida3dab7o"/><path clip-rule="evenodd" class="p6yrz0b3y"/><g class="mc2zb0bvp"><path class="ow95c6k3i"/><path class="cf2_2ceon"/><path class="sw2kbc_hw"/><path class="d2u2ibczd"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:basketball-bold-duotone"} {...others} />);
}

export default Component;
