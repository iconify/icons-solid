import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7o4albhq.css';
import '../../css/z/z70t_abxm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z7o4albhq"/><path class="z70t_abxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:seabed-survey-20"} {...others} />);
}

export default Component;
