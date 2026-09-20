import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyg283b4l.css';
import '../../css/h/hish2dbhf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dyg283b4l"/><path class="hish2dbhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:sparkle-filled"} {...others} />);
}

export default Component;
