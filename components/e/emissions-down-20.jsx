import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzjn5iovv.css';
import '../../css/m/mignyccut.css';
import '../../css/b/bbd2h6sio.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xzjn5iovv"/><path class="mignyccut"/><path class="bbd2h6sio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:emissions-down-20"} {...others} />);
}

export default Component;
