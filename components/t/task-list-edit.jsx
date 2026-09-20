import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/x6tl3lb_q.css';
import '../../css/k/k-mu0z0vz.css';
import '../../css/e/ez0mwo1-k.css';
import '../../css/t/tm9ck50fz.css';
import '../../css/r/rn5lbz39n.css';
import '../../css/p/pzdoeh8jw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="x6tl3lb_q"/><path class="k-mu0z0vz"/><path class="ez0mwo1-k"/><path class="tm9ck50fz"/><path class="rn5lbz39n"/><path class="pzdoeh8jw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:task-list-edit"} {...others} />);
}

export default Component;
