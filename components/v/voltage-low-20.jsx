import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlwbi4p-v.css';
import '../../css/f/f_y7kz9fi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vlwbi4p-v"/><path class="f_y7kz9fi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:voltage-low-20"} {...others} />);
}

export default Component;
