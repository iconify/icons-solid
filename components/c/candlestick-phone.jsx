import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/co3vs6bmx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="co3vs6bmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:candlestick-phone"} {...others} />);
}

export default Component;
