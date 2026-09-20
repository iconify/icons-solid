import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/municvskz.css';
import '../../css/o/o61t5pb2z.css';
import '../../css/x/xymxe-b8l.css';
import '../../css/x/xryx_iq6o.css';
import '../../css/x/xd64k3b_e.css';
import '../../css/v/vs00wly0i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="municvskz"/><path class="o61t5pb2z"/><path class="xymxe-b8l"/><path class="xryx_iq6o"/><path class="xd64k3b_e"/><path class="vs00wly0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:image-file-duo"} {...others} />);
}

export default Component;
