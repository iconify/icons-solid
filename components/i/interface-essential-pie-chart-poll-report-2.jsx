import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/swfaxu8nu.css';
import '../../css/k/kkjq9rb7f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="swfaxu8nu"/><path class="kkjq9rb7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-pie-chart-poll-report-2"} {...others} />);
}

export default Component;
