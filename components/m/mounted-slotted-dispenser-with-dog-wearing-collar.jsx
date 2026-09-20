import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wl_5fob-g.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wl_5fob-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:mounted-slotted-dispenser-with-dog-wearing-collar"} {...others} />);
}

export default Component;
