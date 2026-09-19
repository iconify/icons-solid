import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z28-l3b8m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z28-l3b8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:candy-cane-solid"} {...others} />);
}

export default Component;
