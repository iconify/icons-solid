import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pfm2ybc6q.css';
import '../../css/s/szotk6bxo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pfm2ybc6q"/><path class="szotk6bxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tidal-stream-turbine-48"} {...others} />);
}

export default Component;
