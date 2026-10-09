import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4xw6ab6k.css';
import '../../css/x/xvdg5pbnh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j4xw6ab6k"/><path class="xvdg5pbnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:train-48"} {...others} />);
}

export default Component;
