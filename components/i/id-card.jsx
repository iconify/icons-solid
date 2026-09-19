import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/v/vp8jg4bpk.css';
import '../../css/h/hnl7cwwfb.css';
import '../../css/u/ugc-jbcel.css';
import '../../css/e/e7tz53s-l.css';
import '../../css/l/lf-pnnrqx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="vp8jg4bpk"/><path class="hnl7cwwfb"/><path class="ugc-jbcel"/><path class="e7tz53s-l"/><path class="lf-pnnrqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:id-card"} {...others} />);
}

export default Component;
