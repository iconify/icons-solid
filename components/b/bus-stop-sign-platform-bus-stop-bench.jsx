import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3p8q1brp.css';
import '../../css/y/ydqtjl9rx.css';
import '../../css/x/xk0-y0bcj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="r3p8q1brp"/><path class="ydqtjl9rx"/><path class="xk0-y0bcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:bus-stop-sign-platform-bus-stop-bench"} {...others} />);
}

export default Component;
