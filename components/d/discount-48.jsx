import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wntq5xn_m.css';
import '../../css/m/m9h-zrraw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wntq5xn_m"/><path class="m9h-zrraw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:discount-48"} {...others} />);
}

export default Component;
