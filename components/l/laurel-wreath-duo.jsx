import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6zlh5b9j.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/udu9855sl.css';
import '../../css/m/mikyttjst.css';
import '../../css/r/r1-6_-btk.css';
import '../../css/x/xrww2gblo.css';
import '../../css/r/rfg28mbfz.css';
import '../../css/v/vh09fwb1p.css';
import '../../css/v/vgsbcbc6l.css';
import '../../css/w/wc1cagptr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s6zlh5b9j secondary"/><g class="dt0cm9dhy primary"><path class="udu9855sl"/><path class="mikyttjst"/><path class="r1-6_-btk"/><path class="xrww2gblo"/><path class="rfg28mbfz"/><path class="vh09fwb1p"/><path class="vgsbcbc6l"/><path class="wc1cagptr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:laurel-wreath-duo"} {...others} />);
}

export default Component;
