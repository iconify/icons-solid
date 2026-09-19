import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umrv9kb7n.css';
import '../../css/q/qx05z4bvk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="umrv9kb7n"/><path class="qx05z4bvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-window-alt"} {...others} />);
}

export default Component;
