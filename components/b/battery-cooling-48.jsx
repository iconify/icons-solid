import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/na8f76bbp.css';
import '../../css/q/qoebn-0by.css';
import '../../css/v/v7mvibbpy.css';
import '../../css/t/tnen5db4c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="na8f76bbp"/><path class="qoebn-0by"/><path class="v7mvibbpy"/><path class="tnen5db4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-cooling-48"} {...others} />);
}

export default Component;
