import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tlxal_o3t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tlxal_o3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:scale-balanced-outline"} {...others} />);
}

export default Component;
