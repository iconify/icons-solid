import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlkz-3bot.css';
import '../../css/x/x5r2fk28b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nlkz-3bot"/><path class="x5r2fk28b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:coupon-48"} {...others} />);
}

export default Component;
