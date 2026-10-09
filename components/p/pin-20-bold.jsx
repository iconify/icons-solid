import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1-q2fbul.css';
import '../../css/w/wz1m72y3c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s1-q2fbul"/><path class="wz1m72y3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pin-20-bold"} {...others} />);
}

export default Component;
