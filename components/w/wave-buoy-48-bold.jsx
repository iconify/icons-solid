import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uhx9-1bok.css';
import '../../css/p/p47yd3vrn.css';
import '../../css/q/qjqywbfqp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uhx9-1bok"/><path class="p47yd3vrn"/><path class="qjqywbfqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wave-buoy-48-bold"} {...others} />);
}

export default Component;
