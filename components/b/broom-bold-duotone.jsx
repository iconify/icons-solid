import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/q/qa-noy6bq.css';
import '../../css/r/riy46sbpp.css';
import '../../css/m/mumjj7_ey.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="qa-noy6bq"/><path class="riy46sbpp"/></g><path class="mumjj7_ey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:broom-bold-duotone"} {...others} />);
}

export default Component;
