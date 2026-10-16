import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utf77lbef.css';
import '../../css/n/nb144-0ui.css';
import '../../css/d/dku8h8g5m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="utf77lbef"/><path class="nb144-0ui"/><path class="dku8h8g5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:merit-order-48"} {...others} />);
}

export default Component;
