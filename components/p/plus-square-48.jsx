import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xx2xmtbjn.css';
import '../../css/l/lajtdm1vq.css';
import '../../css/m/m3eum-q9t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xx2xmtbjn"/><path class="lajtdm1vq"/><path class="m3eum-q9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plus-square-48"} {...others} />);
}

export default Component;
