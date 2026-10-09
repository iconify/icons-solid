import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01eto0we.css';
import '../../css/w/wlja3wbcz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h01eto0we"/><path class="wlja3wbcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:square-check-48"} {...others} />);
}

export default Component;
