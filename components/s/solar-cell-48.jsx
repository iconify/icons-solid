import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b6fb_actj.css';
import '../../css/r/rtr4tcjzi.css';
import '../../css/a/agvxs4kjq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b6fb_actj"/><path class="rtr4tcjzi"/><path class="agvxs4kjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-cell-48"} {...others} />);
}

export default Component;
