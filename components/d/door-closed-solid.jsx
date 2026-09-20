import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/os1ydj4cg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="os1ydj4cg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:door-closed-solid"} {...others} />);
}

export default Component;
