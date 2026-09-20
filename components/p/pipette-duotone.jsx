import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/spvf66xfy.css';
import '../../css/a/ap6ktuy1p.css';
import '../../css/x/x43rtcqfw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="spvf66xfy"/><path class="ap6ktuy1p"/><path class="x43rtcqfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:pipette-duotone"} {...others} />);
}

export default Component;
