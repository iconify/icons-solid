import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv_brepse.css';
import '../../css/g/gz2qe6b_o.css';
import '../../css/g/g_mohvbwm.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="yv_brepse"/><path class="gz2qe6b_o"/><path class="g_mohvbwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:close-circle-twotone"} {...others} />);
}

export default Component;
