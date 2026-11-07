import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ys39w4b7n.css';
import '../../css/q/q-xlmac1a.css';
import '../../css/z/zopjch_2q.css';
import '../../css/i/itzdzgb-y.css';
import '../../css/k/k97ygbbpb.css';
import '../../css/d/do-vovbeq.css';
import '../../css/g/gqsddbcer.css';
import '../../css/p/p7fs_qxcd.css';
import '../../css/v/vtj68-i3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ys39w4b7n"/><path class="q-xlmac1a"/><circle class="zopjch_2q"/><path class="itzdzgb-y"/><path class="k97ygbbpb"/><path class="do-vovbeq"/><path class="gqsddbcer"/><path class="p7fs_qxcd"/><path class="vtj68-i3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:server-path-linear"} {...others} />);
}

export default Component;
