import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxz7st9fi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nxz7st9fi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:candy-cane-outline"} {...others} />);
}

export default Component;
