import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1mcems0k.css';
import '../../css/z/zgr1s6bag.css';
import '../../css/q/q9re1fbbm.css';
import '../../css/p/p40y-2b1m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l1mcems0k"/><path class="zgr1s6bag"/><path class="q9re1fbbm"/><path class="p40y-2b1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-snowflake-20-bold"} {...others} />);
}

export default Component;
