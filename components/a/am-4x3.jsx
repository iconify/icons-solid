import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vu44icb9g.css';
import '../../css/l/l3a29xfgf.css';
import '../../css/v/vuq4s9bmc.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="vu44icb9g"/><path class="l3a29xfgf"/><path class="vuq4s9bmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:am-4x3"} {...others} />);
}

export default Component;
