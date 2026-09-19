import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnax8dbwd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wnax8dbwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:checkmark-sharp"} {...others} />);
}

export default Component;
