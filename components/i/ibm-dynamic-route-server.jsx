import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1s786g6g.css';
import '../../css/q/ql0g54bag.css';
import '../../css/a/ar__gdbwn.css';
import '../../css/g/gkts6gb_a.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="r1s786g6g"/><circle class="ql0g54bag"/><path class="ar__gdbwn"/><path class="gkts6gb_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-dynamic-route-server"} {...others} />);
}

export default Component;
