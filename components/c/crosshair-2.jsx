import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trlk_bt4x.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="trlk_bt4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:crosshair-2"} {...others} />);
}

export default Component;
