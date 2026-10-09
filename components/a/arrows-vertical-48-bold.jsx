import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arf8ercmz.css';
import '../../css/w/wmf5h3zqc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="arf8ercmz"/><path class="wmf5h3zqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrows-vertical-48-bold"} {...others} />);
}

export default Component;
