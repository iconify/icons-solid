import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozby7f9jz.css';
import '../../css/p/px_2rvbar.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ozby7f9jz"/><path class="px_2rvbar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:hourglass-outline"} {...others} />);
}

export default Component;
