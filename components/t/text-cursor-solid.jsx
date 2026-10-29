import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ik4-3--mh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ik4-3--mh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:text-cursor-solid"} {...others} />);
}

export default Component;
