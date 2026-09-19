import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jo_8_sedt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jo_8_sedt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:microscope-solid"} {...others} />);
}

export default Component;
