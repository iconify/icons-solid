import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dezwopb-j.css';
import '../../css/i/im6_9vhgw.css';
import '../../css/r/rfgrjcbjr.css';
import '../../css/q/qel2yy7gu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dezwopb-j"/><path class="im6_9vhgw"/><path class="rfgrjcbjr"/><path class="qel2yy7gu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-spreadsheet-48"} {...others} />);
}

export default Component;
