import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v0mnniwzq.css';
import '../../css/d/dp5zcac4d.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/r/rv8lfbcew.css';
import '../../css/p/piw-45d7x.css';
import '../../css/c/cazy7abfr.css';
import '../../css/y/ydxu9l6jm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="v0mnniwzq"/><path class="dp5zcac4d"/><g class="mc2zb0bvp"><path class="rv8lfbcew"/><path class="piw-45d7x"/><path class="cazy7abfr"/><path class="ydxu9l6jm"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:users-group-two-rounded-bold-duotone"} {...others} />);
}

export default Component;
