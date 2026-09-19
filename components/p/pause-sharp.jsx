import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgh8nu16y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wgh8nu16y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:pause-sharp"} {...others} />);
}

export default Component;
