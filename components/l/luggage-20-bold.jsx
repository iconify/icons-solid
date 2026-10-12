import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncjcrccsd.css';
import '../../css/w/wfyvh_b2x.css';
import '../../css/r/r5bqwybgq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ncjcrccsd"/><path class="wfyvh_b2x"/><path class="r5bqwybgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:luggage-20-bold"} {...others} />);
}

export default Component;
