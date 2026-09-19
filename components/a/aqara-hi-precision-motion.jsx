import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iuu17jmxc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iuu17jmxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:aqara-hi-precision-motion"} {...others} />);
}

export default Component;
