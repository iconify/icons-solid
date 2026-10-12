import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5fytvx5z.css';
import '../../css/s/s8208dgjy.css';
import '../../css/l/lxculd_tv.css';
import '../../css/x/xh5w7ub4h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d5fytvx5z"/><path class="s8208dgjy"/><path class="lxculd_tv"/><path class="xh5w7ub4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:abacus-20-bold"} {...others} />);
}

export default Component;
