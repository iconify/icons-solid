import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crxzhebgb.css';
import '../../css/r/rpsqcp5fk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="crxzhebgb"/><path class="rpsqcp5fk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-pie-slice-48-bold"} {...others} />);
}

export default Component;
