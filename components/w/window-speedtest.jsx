import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rhekvnzub.css';
import '../../css/p/p86fbnb3m.css';
import '../../css/h/h2yd55b_g.css';
import '../../css/m/md5g9bbwd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rhekvnzub"/><path class="p86fbnb3m"/><path class="h2yd55b_g"/><path class="md5g9bbwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:window-speedtest"} {...others} />);
}

export default Component;
