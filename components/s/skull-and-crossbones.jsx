import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xezo4qbpx.css';
import '../../css/b/bwm8enb1q.css';
import '../../css/k/kd65z_mhr.css';
import '../../css/h/h-plp00gl.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/i/irxrhtb5i.css';
import '../../css/v/v1avh5t-p.css';
import '../../css/v/vn2paz-3q.css';
import '../../css/d/dmciurblb.css';
import '../../css/s/sgtkmeeby.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xezo4qbpx"/><path class="bwm8enb1q"/><path class="kd65z_mhr"/><path class="h-plp00gl"/><g class="brzn_0bpr"><path class="irxrhtb5i"/><path class="v1avh5t-p"/><circle class="vn2paz-3q"/><circle class="dmciurblb"/><path class="sgtkmeeby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:skull-and-crossbones"} {...others} />);
}

export default Component;
