import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/izjyqdbgb.css';
import '../../css/g/gqhyy7b6d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="izjyqdbgb"/><path class="gqhyy7b6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:home-battery-48-bold"} {...others} />);
}

export default Component;
