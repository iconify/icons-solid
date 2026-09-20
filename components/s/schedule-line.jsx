import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pa_8_q4im.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pa_8_q4im"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:schedule-line"} {...others} />);
}

export default Component;
