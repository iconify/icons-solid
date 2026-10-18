import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hngnej2uq.css';
import '../../css/e/e-pq-g8jr.css';
import '../../css/c/crbcydbuy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hngnej2uq"/><path class="e-pq-g8jr"/><path class="crbcydbuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:park-and-ride-48-bold"} {...others} />);
}

export default Component;
