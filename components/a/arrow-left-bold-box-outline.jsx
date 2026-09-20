import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vksi9_b9v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vksi9_b9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:arrow-left-bold-box-outline"} {...others} />);
}

export default Component;
