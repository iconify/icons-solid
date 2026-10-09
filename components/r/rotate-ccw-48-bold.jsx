import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7pegcc2c.css';
import '../../css/q/qb0cveb8r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h7pegcc2c"/><path class="qb0cveb8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rotate-ccw-48-bold"} {...others} />);
}

export default Component;
