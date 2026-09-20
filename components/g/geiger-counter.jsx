import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dbn9z9b2y.css';
import '../../css/y/y2bguvodm.css';
import '../../css/r/rrpy2u3-v.css';
import '../../css/i/ivf82fn7y.css';
import '../../css/s/snfrkacgn.css';
import '../../css/b/btnne-b7c.css';
import '../../css/q/qls3tt6ai.css';
import '../../css/i/ida2qh4kl.css';
import '../../css/d/dqihv-bsa.css';
import '../../css/w/w1xjn0i1w.css';
import '../../css/m/mobw83b4i.css';

const viewBox = {"width":72,"height":72};
const content = `<rect class="dbn9z9b2y"/><circle class="y2bguvodm"/><ellipse class="rrpy2u3-v"/><path class="ivf82fn7y"/><path class="snfrkacgn"/><g class="btnne-b7c"><path class="qls3tt6ai"/><rect class="ida2qh4kl"/><path class="dqihv-bsa"/><path class="w1xjn0i1w"/><rect class="mobw83b4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:geiger-counter"} {...others} />);
}

export default Component;
