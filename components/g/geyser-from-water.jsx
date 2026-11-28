import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvfy4cbeq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="cvfy4cbeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:geyser-from-water"} {...others} />);
}

export default Component;
