import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/so3-zcgst.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="so3-zcgst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:rocket-thruster"} {...others} />);
}

export default Component;
