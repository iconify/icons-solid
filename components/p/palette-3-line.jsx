import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/chko4obfw.css';
import '../../css/m/m3xop7dba.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="chko4obfw"/><path class="m3xop7dba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:palette-3-line"} {...others} />);
}

export default Component;
