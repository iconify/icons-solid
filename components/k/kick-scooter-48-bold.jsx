import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h72dw-q8s.css';
import '../../css/a/az0wvsxpv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h72dw-q8s"/><path class="az0wvsxpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:kick-scooter-48-bold"} {...others} />);
}

export default Component;
