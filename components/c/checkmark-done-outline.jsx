import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdt5yo5_e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vdt5yo5_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:checkmark-done-outline"} {...others} />);
}

export default Component;
