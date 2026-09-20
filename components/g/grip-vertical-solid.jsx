import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0y5s8bct.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q0y5s8bct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:grip-vertical-solid"} {...others} />);
}

export default Component;
