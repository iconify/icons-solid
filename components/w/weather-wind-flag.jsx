import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xb7uilnfd.css';
import '../../css/a/assurkbig.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xb7uilnfd"/><path class="assurkbig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:weather-wind-flag"} {...others} />);
}

export default Component;
