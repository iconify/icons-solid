import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/di6nw9_ac.css';
import '../../css/p/pzmzhxbns.css';
import '../../css/x/xcd9w1bsq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="di6nw9_ac"/><path class="pzmzhxbns"/><path class="xcd9w1bsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lng-ship-20-bold"} {...others} />);
}

export default Component;
