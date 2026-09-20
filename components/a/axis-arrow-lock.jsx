import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vkawrjb4i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vkawrjb4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:axis-arrow-lock"} {...others} />);
}

export default Component;
