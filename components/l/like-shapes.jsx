import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kaw7birim.css';
import '../../css/v/vk3y0vbad.css';
import '../../css/f/fc1qebbtl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kaw7birim"/><path class="vk3y0vbad"/><path class="fc1qebbtl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:like-shapes"} {...others} />);
}

export default Component;
