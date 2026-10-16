import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rivd4q8kk.css';
import '../../css/l/ltjv97o_e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rivd4q8kk"/><path class="ltjv97o_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:floor-plan-48"} {...others} />);
}

export default Component;
