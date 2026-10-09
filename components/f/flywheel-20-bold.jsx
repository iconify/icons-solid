import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_1rdccum.css';
import '../../css/m/mptrtbrij.css';
import '../../css/q/qi6_u5bwz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t_1rdccum"/><path class="mptrtbrij"/><path class="qi6_u5bwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flywheel-20-bold"} {...others} />);
}

export default Component;
