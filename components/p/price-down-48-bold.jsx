import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qcp6u-oop.css';
import '../../css/e/ee8dj_rhy.css';
import '../../css/o/on5c6nbor.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qcp6u-oop"/><path class="ee8dj_rhy"/><path class="on5c6nbor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:price-down-48-bold"} {...others} />);
}

export default Component;
