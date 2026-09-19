import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ji5cev1ps.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ji5cev1ps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:cloud-meatball-outline"} {...others} />);
}

export default Component;
