import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0hhb404c.css';
import '../../css/x/xosj3nb8q.css';
import '../../css/a/aexj2ac1o.css';
import '../../css/p/pvxtckb7e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a0hhb404c"/><path class="xosj3nb8q"/><path class="aexj2ac1o"/><path class="pvxtckb7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:oil-rig-48-bold"} {...others} />);
}

export default Component;
