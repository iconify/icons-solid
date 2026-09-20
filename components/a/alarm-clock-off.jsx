import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytx9e-bxh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ytx9e-bxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:alarm-clock-off"} {...others} />);
}

export default Component;
