import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njz8i7bri.css';
import '../../css/i/i5ok5vt-f.css';
import '../../css/n/n4l0dpjwy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="njz8i7bri"/><path class="i5ok5vt-f"/><path class="n4l0dpjwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:emissions-down-48-bold"} {...others} />);
}

export default Component;
