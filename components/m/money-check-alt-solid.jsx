import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8wyo1b7b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="w8wyo1b7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:money-check-alt-solid"} {...others} />);
}

export default Component;
