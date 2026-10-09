import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hg06y9bau.css';
import '../../css/j/j02yjqo5b.css';
import '../../css/v/vxu1d29jo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hg06y9bau"/><path class="j02yjqo5b"/><path class="vxu1d29jo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:substation-20"} {...others} />);
}

export default Component;
