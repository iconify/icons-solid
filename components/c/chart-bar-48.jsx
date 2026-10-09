import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9l2qqe6j.css';
import '../../css/b/bkiex1byg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n9l2qqe6j"/><path class="bkiex1byg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-bar-48"} {...others} />);
}

export default Component;
