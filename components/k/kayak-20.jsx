import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mx6i4llwi.css';
import '../../css/w/woo7zdu1m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mx6i4llwi"/><path class="woo7zdu1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:kayak-20"} {...others} />);
}

export default Component;
