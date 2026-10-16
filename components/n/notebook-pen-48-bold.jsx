import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxyn2mbuu.css';
import '../../css/l/l5s4u6bdo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jxyn2mbuu"/><path class="l5s4u6bdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:notebook-pen-48-bold"} {...others} />);
}

export default Component;
