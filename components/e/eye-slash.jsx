import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddw5uz2vk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ddw5uz2vk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:eye-slash"} {...others} />);
}

export default Component;
