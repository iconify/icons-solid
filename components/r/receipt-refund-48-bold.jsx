import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qk4s-jblr.css';
import '../../css/o/o2ddx5b5f.css';
import '../../css/j/jrnu5tbgw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qk4s-jblr"/><path class="o2ddx5b5f"/><path class="jrnu5tbgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:receipt-refund-48-bold"} {...others} />);
}

export default Component;
