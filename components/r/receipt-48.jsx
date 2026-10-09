import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oegrs6bql.css';
import '../../css/o/okiekq7yz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oegrs6bql"/><path class="okiekq7yz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:receipt-48"} {...others} />);
}

export default Component;
