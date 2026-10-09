import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p483qmvuq.css';
import '../../css/i/i30_rk_1l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p483qmvuq"/><path class="i30_rk_1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ammonia-20-bold"} {...others} />);
}

export default Component;
