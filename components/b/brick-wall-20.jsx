import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qlf07hbzj.css';
import '../../css/w/w9mp4gb4o.css';
import '../../css/w/we5ze0blf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qlf07hbzj"/><path class="w9mp4gb4o"/><path class="we5ze0blf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:brick-wall-20"} {...others} />);
}

export default Component;
