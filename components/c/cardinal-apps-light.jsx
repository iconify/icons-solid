import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vntnxjb-c.css';
import '../../css/y/yrr_rhere.css';
import '../../css/r/rpalb8bzg.css';
import '../../css/h/h8bdkkbmq.css';
import '../../css/v/vyjz82b0t.css';
import '../../css/t/t20h10bpb.css';
import '../../css/z/zzv7fab7e.css';
import '../../css/o/o2zegub_r.css';
import '../../css/s/s52weevnc.css';
import '../../css/i/i1lomubim.css';
import '../../css/a/aw83yyqbn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vntnxjb-c"/><path class="yrr_rhere"/><path class="rpalb8bzg"/><path class="h8bdkkbmq"/><path class="vyjz82b0t"/><path class="t20h10bpb"/><path class="zzv7fab7e"/><path class="o2zegub_r"/><path class="s52weevnc"/><path class="i1lomubim"/><path class="aw83yyqbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cardinal-apps-light"} {...others} />);
}

export default Component;
