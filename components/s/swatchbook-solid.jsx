import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ul8cvla7h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ul8cvla7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:swatchbook-solid"} {...others} />);
}

export default Component;
