import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itsdl0bpk.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="itsdl0bpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:unlink-horizontal"} {...others} />);
}

export default Component;
