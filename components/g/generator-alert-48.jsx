import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gw9nxhb5q.css';
import '../../css/a/aet2f2bmc.css';
import '../../css/i/ikpbwe38b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gw9nxhb5q"/><path class="aet2f2bmc"/><path class="ikpbwe38b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:generator-alert-48"} {...others} />);
}

export default Component;
