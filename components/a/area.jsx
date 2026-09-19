import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vmti31bmb.css';
import '../../css/g/g-1rbpbil.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vmti31bmb"/><path class="g-1rbpbil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:area"} {...others} />);
}

export default Component;
