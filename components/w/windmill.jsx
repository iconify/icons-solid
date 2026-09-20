import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l5m0jebpi.css';
import '../../css/n/nkcg3hbmy.css';
import '../../css/q/q-6pl5bqp.css';
import '../../css/m/mxsr822jq.css';
import '../../css/l/lnqoirdfi.css';
import '../../css/k/kti-r5b0y.css';
import '../../css/f/f_kweibjp.css';
import '../../css/t/t4ddg5bjp.css';
import '../../css/y/y-dayebyp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="l5m0jebpi"/><path class="nkcg3hbmy"/><path class="q-6pl5bqp"/><path class="mxsr822jq"/><path class="lnqoirdfi"/><path class="kti-r5b0y"/><path class="f_kweibjp"/><path class="t4ddg5bjp"/><path class="y-dayebyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:windmill"} {...others} />);
}

export default Component;
