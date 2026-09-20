import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xmuzp3bgs.css';
import '../../css/j/j52af2bgq.css';
import '../../css/x/x0h01vbne.css';
import '../../css/m/mh8jnrb6c.css';
import '../../css/n/ntz8sn7ri.css';
import '../../css/h/h2viwbc1k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xmuzp3bgs"/><path class="j52af2bgq"/><path class="x0h01vbne"/><path class="mh8jnrb6c"/><path class="ntz8sn7ri"/><path class="h2viwbc1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:shield-monitor"} {...others} />);
}

export default Component;
