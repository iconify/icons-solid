import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/es71m-npu.css';
import '../../css/v/vx5rr602v.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="es71m-npu"/><path class="vx5rr602v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:menu-dots-circle-horizontal-16"} {...others} />);
}

export default Component;
