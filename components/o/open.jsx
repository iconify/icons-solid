import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/y-xreybjk.css';
import '../../css/m/m9twe4b0l.css';
import '../../css/l/lldepnbza.css';
import '../../css/j/juu_gdcax.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="y-xreybjk"/><path class="m9twe4b0l"/><path class="lldepnbza"/><path class="juu_gdcax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:open"} {...others} />);
}

export default Component;
