import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ll70l5bpn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ll70l5bpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:slider-horizontal"} {...others} />);
}

export default Component;
