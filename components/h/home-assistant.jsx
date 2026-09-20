import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-6xlb0ma.css';
import '../../css/j/jxxo5_2qq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p-6xlb0ma"/><path class="jxxo5_2qq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:home-assistant"} {...others} />);
}

export default Component;
