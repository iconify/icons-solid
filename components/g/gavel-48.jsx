import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/opt71mb5e.css';
import '../../css/k/k1vorjqdj.css';
import '../../css/r/rg1xqfbjj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="opt71mb5e"/><path class="k1vorjqdj"/><path class="rg1xqfbjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gavel-48"} {...others} />);
}

export default Component;
