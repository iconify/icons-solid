import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3c95uabp.css';
import '../../css/u/upue2acrb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l3c95uabp"/><path class="upue2acrb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:calendar-plus-filled"} {...others} />);
}

export default Component;
