import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qpwx8jvkg.css';
import '../../css/i/i--whmege.css';
import '../../css/y/ys0j4mbvg.css';
import '../../css/p/povs420wf.css';
import '../../css/q/qv3bytbet.css';
import '../../css/s/sovzkxbpq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="qpwx8jvkg"/><path class="i--whmege"/><rect transform="rotate(45 34.606 4.908)" class="ys0j4mbvg"/><circle class="povs420wf"/><circle class="qv3bytbet"/><circle class="sovzkxbpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:modify"} {...others} />);
}

export default Component;
