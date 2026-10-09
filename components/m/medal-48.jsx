import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8ovs__gx.css';
import '../../css/b/bhg_0dbbc.css';
import '../../css/y/yhupigbgw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y8ovs__gx"/><path class="bhg_0dbbc"/><path class="yhupigbgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:medal-48"} {...others} />);
}

export default Component;
