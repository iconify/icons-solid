import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w25y_3zel.css';
import '../../css/x/xkt26-7va.css';
import '../../css/r/r_bmoabot.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/p/p343m9bwv.css';
import '../../css/g/g9yhdubnq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="w25y_3zel"/><path class="xkt26-7va"/><path class="r_bmoabot"/><g class="mc2zb0bvp"><path class="p343m9bwv"/><path class="g9yhdubnq"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tv-bold-duotone"} {...others} />);
}

export default Component;
