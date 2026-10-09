import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sajekru3w.css';
import '../../css/o/olbscvb8w.css';
import '../../css/c/ctg5mublm.css';
import '../../css/q/q4gaqcb3x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sajekru3w"/><path class="olbscvb8w"/><path class="ctg5mublm"/><path class="q4gaqcb3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-symbol-48-bold"} {...others} />);
}

export default Component;
