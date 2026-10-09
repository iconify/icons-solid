import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jz02pm04a.css';
import '../../css/u/ucu3b4dxx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jz02pm04a"/><path class="ucu3b4dxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sea-level-rise-48"} {...others} />);
}

export default Component;
