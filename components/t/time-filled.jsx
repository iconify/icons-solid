import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vmb0t7bxz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vmb0t7bxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:time-filled"} {...others} />);
}

export default Component;
