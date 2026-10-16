import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m5rak2bbx.css';
import '../../css/q/qnvn8ia7m.css';
import '../../css/v/vai4pdqog.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m5rak2bbx"/><path class="qnvn8ia7m"/><path class="vai4pdqog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ceiling-light-48-bold"} {...others} />);
}

export default Component;
