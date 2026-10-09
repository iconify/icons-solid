import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tz7zambhg.css';
import '../../css/y/yt3jrachk.css';
import '../../css/q/qzi560ajg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tz7zambhg"/><path class="yt3jrachk"/><path class="qzi560ajg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:phone-call-20"} {...others} />);
}

export default Component;
