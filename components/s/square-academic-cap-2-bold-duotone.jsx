import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glh9vkb1x.css';
import '../../css/k/kp08yd09g.css';
import '../../css/w/wz2bj5btz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="glh9vkb1x"/><path class="kp08yd09g"/><path class="wz2bj5btz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-academic-cap-2-bold-duotone"} {...others} />);
}

export default Component;
