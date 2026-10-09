import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o51dot6hb.css';
import '../../css/y/ybcmecbwb.css';
import '../../css/r/r9ac0nb5d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o51dot6hb"/><path class="ybcmecbwb"/><path class="r9ac0nb5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sprout-48"} {...others} />);
}

export default Component;
