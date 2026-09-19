import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hp8-l5bxx.css';
import '../../css/p/puuojebkg.css';
import '../../css/i/ivqa4kblz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="hp8-l5bxx"/><path class="puuojebkg"/><path class="ivqa4kblz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pacifier"} {...others} />);
}

export default Component;
