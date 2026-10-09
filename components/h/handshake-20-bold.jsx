import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/noq7sdh0f.css';
import '../../css/e/earracbsm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="noq7sdh0f"/><path class="earracbsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:handshake-20-bold"} {...others} />);
}

export default Component;
