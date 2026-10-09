import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdp5l0b5n.css';
import '../../css/z/zyix_fbli.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qdp5l0b5n"/><path class="zyix_fbli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-scatter-48"} {...others} />);
}

export default Component;
