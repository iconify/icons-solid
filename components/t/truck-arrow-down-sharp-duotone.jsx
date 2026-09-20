import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/a1uo0ccgs.css';
import '../../css/h/h5aqumbui.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="a1uo0ccgs"/><path class="h5aqumbui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:truck-arrow-down-sharp-duotone"} {...others} />);
}

export default Component;
