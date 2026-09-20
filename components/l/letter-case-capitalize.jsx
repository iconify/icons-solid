import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cukjm2ikv.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="cukjm2ikv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:letter-case-capitalize"} {...others} />);
}

export default Component;
