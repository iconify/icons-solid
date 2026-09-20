import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlg3n8bgv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vlg3n8bgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:rhomb-filled"} {...others} />);
}

export default Component;
