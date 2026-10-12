import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-pj4obxj.css';
import '../../css/c/c6gzs9dks.css';
import '../../css/q/qy_x_gaft.css';
import '../../css/e/evng24apc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q-pj4obxj"/><path class="c6gzs9dks"/><path class="qy_x_gaft"/><path class="evng24apc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shield-plus-20"} {...others} />);
}

export default Component;
