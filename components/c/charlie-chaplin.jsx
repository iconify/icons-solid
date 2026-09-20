import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s4f732bpg.css';
import '../../css/p/p8vnclbzz.css';
import '../../css/s/s7kktcfmb.css';
import '../../css/o/oc0cv-yid.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s4f732bpg"/><path class="p8vnclbzz"/><path class="s7kktcfmb"/><path class="oc0cv-yid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:charlie-chaplin"} {...others} />);
}

export default Component;
