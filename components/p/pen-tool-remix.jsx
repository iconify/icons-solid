import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vk-_l-3je.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="vk-_l-3je"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:pen-tool-remix"} {...others} />);
}

export default Component;
