import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fnv6n6bam.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fnv6n6bam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:shield-check-solid"} {...others} />);
}

export default Component;
