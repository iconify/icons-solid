import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p2jls1bqn.css';
import '../../css/n/nu3voab9r.css';
import '../../css/y/yd_9efb2s.css';
import '../../css/f/fqiqfss_h.css';
import '../../css/z/z_hm6wbys.css';
import '../../css/x/xzm1ppbjl.css';
import '../../css/f/frv40acqw.css';
import '../../css/n/n07-ln38l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p2jls1bqn wm-a"/><path class="nu3voab9r wm-a"/><path class="wm-a yd_9efb2s"/><path class="fqiqfss_h wm-k"/><path class="wm-k z_hm6wbys"/><path class="wm-k xzm1ppbjl"/><path class="frv40acqw wm-shine"/><path class="n07-ln38l wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:pen-line"} {...others} />);
}

export default Component;
