import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ev0k3vk4p.css';

const viewBox = {"width":63,"height":64};
const content = `<path class="ev0k3vk4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:first-aid"} {...others} />);
}

export default Component;
