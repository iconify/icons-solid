import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ps-cpeb9h.css';
import '../../css/e/ekaxy2bmk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ps-cpeb9h"/><path class="ekaxy2bmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:expansion-vessel-48"} {...others} />);
}

export default Component;
