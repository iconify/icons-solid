import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m7qd3ubqx.css';
import '../../css/j/j4kecacgy.css';
import '../../css/z/ztnyhokgp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m7qd3ubqx"/><path class="j4kecacgy"/><path class="ztnyhokgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crystal-48"} {...others} />);
}

export default Component;
