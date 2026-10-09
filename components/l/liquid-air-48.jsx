import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yt1dg5b4b.css';
import '../../css/q/qeyspdugl.css';
import '../../css/a/a47wfebfy.css';
import '../../css/v/v8xteh5vu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yt1dg5b4b"/><path class="qeyspdugl"/><path class="a47wfebfy"/><path class="v8xteh5vu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:liquid-air-48"} {...others} />);
}

export default Component;
