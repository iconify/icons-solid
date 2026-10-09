import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsahk5bgt.css';
import '../../css/d/d1j7k6bho.css';
import '../../css/h/hae377b7i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qsahk5bgt"/><path class="d1j7k6bho"/><path class="hae377b7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hourglass-48-bold"} {...others} />);
}

export default Component;
