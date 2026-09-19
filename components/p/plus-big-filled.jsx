import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejpz3s0yd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ejpz3s0yd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:plus-big-filled"} {...others} />);
}

export default Component;
