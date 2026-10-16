import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0tww8tsi.css';
import '../../css/a/azjk1obih.css';
import '../../css/y/y_yvwz1md.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l0tww8tsi"/><path class="azjk1obih"/><path class="y_yvwz1md"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:monitor-off-48"} {...others} />);
}

export default Component;
