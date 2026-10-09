import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dbl65ebhc.css';
import '../../css/o/opemywb2c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dbl65ebhc"/><path class="opemywb2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bed-20-bold"} {...others} />);
}

export default Component;
