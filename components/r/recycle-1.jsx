import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xhcdj9btj.css';
import '../../css/a/awxuv4b5m.css';
import '../../css/n/nmg90gbyd.css';
import '../../css/i/ib4k1osel.css';
import '../../css/d/dekobwb-c.css';
import '../../css/e/edm8012qz.css';
import '../../css/v/vpe2khbkf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="xhcdj9btj"/><path class="awxuv4b5m"/><path class="nmg90gbyd"/><path class="ib4k1osel"/><path class="dekobwb-c"/><path class="edm8012qz"/><path class="vpe2khbkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:recycle-1"} {...others} />);
}

export default Component;
