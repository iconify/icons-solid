import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nivpnqg4j.css';
import '../../css/u/uio446_ji.css';
import '../../css/j/jfv0yh5wi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nivpnqg4j"/><path class="uio446_ji"/><path class="jfv0yh5wi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:layout-20-bold"} {...others} />);
}

export default Component;
