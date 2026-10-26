import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/y/y4yxzacrn.css';
import '../../css/j/jvxl2lhjk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="y4yxzacrn"/><path class="jvxl2lhjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:book-open"} {...others} />);
}

export default Component;
