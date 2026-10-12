import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/myys72pto.css';
import '../../css/v/vk89q7biw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="myys72pto"/><path class="vk89q7biw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:phone-out-fill-20"} {...others} />);
}

export default Component;
