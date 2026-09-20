import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ke40b1uoi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ke40b1uoi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-navigation-right-circle-1"} {...others} />);
}

export default Component;
