import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti4_udjxz.css';
import '../../css/a/anrgkxx6u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ti4_udjxz"/><path class="anrgkxx6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:calendar-range-20"} {...others} />);
}

export default Component;
