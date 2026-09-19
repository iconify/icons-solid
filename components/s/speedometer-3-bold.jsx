import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vk_5tesqr.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="vk_5tesqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:speedometer-3-bold"} {...others} />);
}

export default Component;
