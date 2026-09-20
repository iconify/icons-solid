import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s86e7cc1y.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="s86e7cc1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:mounted-slotted-dispenser-with-poo-pile"} {...others} />);
}

export default Component;
