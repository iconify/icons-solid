import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmthu7bxv.css';
import '../../css/o/o6y1lcbvk.css';
import '../../css/j/jted5gb9a.css';
import '../../css/h/h0tv89g1e.css';
import '../../css/u/uoxzn8bkx.css';
import '../../css/b/b5nj5ob5t.css';
import '../../css/o/owp_cuhvd.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/s/srlyzench.css';
import '../../css/s/s8tz7ob5w.css';
import '../../css/m/mz_jzib2t.css';
import '../../css/v/v-vyt44hv.css';
import '../../css/h/h53_eh4aa.css';
import '../../css/o/oghob0bgq.css';
import '../../css/y/ynsjfobmq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jmthu7bxv"/><path class="o6y1lcbvk"/><path class="jted5gb9a"/><circle class="h0tv89g1e"/><circle class="uoxzn8bkx"/><path class="b5nj5ob5t"/><path class="owp_cuhvd"/><g class="ij2x_72vy"><path class="srlyzench"/><path class="s8tz7ob5w"/><circle class="mz_jzib2t"/><circle class="v-vyt44hv"/><path class="h53_eh4aa"/><path class="oghob0bgq"/><path class="ynsjfobmq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bus"} {...others} />);
}

export default Component;
