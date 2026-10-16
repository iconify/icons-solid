import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iua8clh6p.css';
import '../../css/n/n_-rgtsiv.css';
import '../../css/q/qbrfddcfq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iua8clh6p"/><path class="n_-rgtsiv"/><path class="qbrfddcfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:receipt-refund-20-bold"} {...others} />);
}

export default Component;
