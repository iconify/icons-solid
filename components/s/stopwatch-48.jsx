import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7474gbcq.css';
import '../../css/f/fk4kw9brn.css';
import '../../css/k/knmmfib1t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w7474gbcq"/><path class="fk4kw9brn"/><path class="knmmfib1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:stopwatch-48"} {...others} />);
}

export default Component;
