import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpi2c7bge.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lpi2c7bge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:chevron-double-left-outline"} {...others} />);
}

export default Component;
