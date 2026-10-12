import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t9xxpvb-v.css';
import '../../css/e/e2fb1bb0n.css';
import '../../css/o/o24sug9tq.css';
import '../../css/b/b1dg_9oeq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t9xxpvb-v"/><path class="e2fb1bb0n"/><path class="o24sug9tq"/><path class="b1dg_9oeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-charger-off-20"} {...others} />);
}

export default Component;
