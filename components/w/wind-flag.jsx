import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fv5om0q-p.css';
import '../../css/m/mni1jebdp.css';
import '../../css/x/xfp-xlb4q.css';
import '../../css/r/rizu8j4vh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fv5om0q-p"/><path class="mni1jebdp"/><path class="xfp-xlb4q"/><path class="rizu8j4vh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:wind-flag"} {...others} />);
}

export default Component;
