import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xgmrpgbtr.css';
import '../../css/d/d2_7dwbzg.css';
import '../../css/a/ambr7wwmm.css';
import '../../css/z/z1s2po69e.css';
import '../../css/e/ekn-6-m4k.css';
import '../../css/v/vkw8-mb2g.css';
import '../../css/c/crgxpcbmq.css';
import '../../css/h/hr6_0tnzh.css';
import '../../css/f/fwiud4_cr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xgmrpgbtr"/><path class="d2_7dwbzg"/><path class="ambr7wwmm"/><path class="z1s2po69e"/><path class="ekn-6-m4k"/><path class="vkw8-mb2g"/><circle class="crgxpcbmq"/><path class="hr6_0tnzh"/><path class="fwiud4_cr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:old-time-camera"} {...others} />);
}

export default Component;
