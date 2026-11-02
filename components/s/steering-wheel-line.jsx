import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yz8mns16v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yz8mns16v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:steering-wheel-line"} {...others} />);
}

export default Component;
