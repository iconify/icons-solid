import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dauqcps4o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dauqcps4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:font-highlight-outline"} {...others} />);
}

export default Component;
