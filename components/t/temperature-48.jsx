import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lg26btbri.css';
import '../../css/i/iasbg5lvo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lg26btbri"/><path class="iasbg5lvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:temperature-48"} {...others} />);
}

export default Component;
