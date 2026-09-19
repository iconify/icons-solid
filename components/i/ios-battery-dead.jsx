import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwm_mmbgi.css';
import '../../css/h/hwy34kbyx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lwm_mmbgi"/><path class="hwy34kbyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-battery-dead"} {...others} />);
}

export default Component;
