import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kyz2fo8fs.css';
import '../../css/e/ecbqf8bde.css';
import '../../css/q/qs6411b4e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kyz2fo8fs"/><path class="ecbqf8bde"/><path class="qs6411b4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:air-purifier-48"} {...others} />);
}

export default Component;
