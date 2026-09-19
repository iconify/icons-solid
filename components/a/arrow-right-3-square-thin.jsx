import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mk9pm4lzm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mk9pm4lzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:arrow-right-3-square-thin"} {...others} />);
}

export default Component;
