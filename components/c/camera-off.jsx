import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/os73vlb4e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="os73vlb4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:camera-off"} {...others} />);
}

export default Component;
