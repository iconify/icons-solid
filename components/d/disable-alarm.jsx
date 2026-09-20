import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/r/repuoubko.css';
import '../../css/p/pg9s91bvt.css';
import '../../css/g/gd8ssw03w.css';
import '../../css/m/mborgi0ve.css';
import '../../css/e/egbi8pbcb.css';
import '../../css/i/iey2hib8d.css';
import '../../css/n/nwzs5qj2d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="repuoubko"/><path class="pg9s91bvt"/><path class="gd8ssw03w"/><path class="mborgi0ve"/><path class="egbi8pbcb"/><path class="iey2hib8d"/><path class="nwzs5qj2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:disable-alarm"} {...others} />);
}

export default Component;
