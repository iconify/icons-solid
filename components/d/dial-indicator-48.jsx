import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmtkecamq.css';
import '../../css/v/vv-azsxen.css';
import '../../css/s/sqh4xjrbe.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nmtkecamq"/><path class="vv-azsxen"/><path class="sqh4xjrbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dial-indicator-48"} {...others} />);
}

export default Component;
