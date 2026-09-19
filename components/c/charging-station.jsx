import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxix6l8rl.css';
import '../../css/h/hy4ycj-aj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cxix6l8rl"/><path class="hy4ycj-aj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:charging-station"} {...others} />);
}

export default Component;
