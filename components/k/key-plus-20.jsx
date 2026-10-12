import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zu-d0ccoo.css';
import '../../css/v/vlpd_6j7q.css';
import '../../css/l/lpcghzexh.css';
import '../../css/q/qy_x_gaft.css';
import '../../css/e/evng24apc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zu-d0ccoo"/><path class="vlpd_6j7q"/><path class="lpcghzexh"/><path class="qy_x_gaft"/><path class="evng24apc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:key-plus-20"} {...others} />);
}

export default Component;
