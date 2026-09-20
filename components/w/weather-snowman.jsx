import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ev43y730d.css';
import '../../css/y/y-tut6bjn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ev43y730d"/><path class="y-tut6bjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:weather-snowman"} {...others} />);
}

export default Component;
