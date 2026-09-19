import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsypz07zq.css';
import '../../css/s/sxehn3akv.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="dsypz07zq"/><path class="sxehn3akv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:microphone-off-fill-12"} {...others} />);
}

export default Component;
