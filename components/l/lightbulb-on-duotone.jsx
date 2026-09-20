import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/r/r1jds9b3f.css';
import '../../css/t/tx-fofwfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="r1jds9b3f"/><path class="tx-fofwfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:lightbulb-on-duotone"} {...others} />);
}

export default Component;
