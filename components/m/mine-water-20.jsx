import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4mdq8b_v.css';
import '../../css/y/y5gy4-btr.css';
import '../../css/q/q9zdo8bou.css';
import '../../css/l/lnk_kr56u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o4mdq8b_v"/><path class="y5gy4-btr"/><path class="q9zdo8bou"/><path class="lnk_kr56u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mine-water-20"} {...others} />);
}

export default Component;
