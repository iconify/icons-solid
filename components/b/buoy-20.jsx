import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdl5g5dgd.css';
import '../../css/e/e2ii3_num.css';
import '../../css/h/hq8tc3ygq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vdl5g5dgd"/><path class="e2ii3_num"/><path class="hq8tc3ygq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:buoy-20"} {...others} />);
}

export default Component;
