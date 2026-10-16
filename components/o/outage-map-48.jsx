import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvjwhfbog.css';
import '../../css/e/ef6a7mfgj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rvjwhfbog"/><path class="ef6a7mfgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:outage-map-48"} {...others} />);
}

export default Component;
