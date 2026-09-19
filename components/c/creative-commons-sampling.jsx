import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vk8ct-eui.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vk8ct-eui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:creative-commons-sampling"} {...others} />);
}

export default Component;
