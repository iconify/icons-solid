import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1oumu-ip.css';
import '../../css/d/dx356g9xe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a1oumu-ip"/><path class="dx356g9xe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:parking-20"} {...others} />);
}

export default Component;
