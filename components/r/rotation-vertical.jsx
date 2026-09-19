import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mcgb9sbeb.css';
import '../../css/b/bg_7oi96m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="mcgb9sbeb"/><path class="bg_7oi96m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rotation-vertical"} {...others} />);
}

export default Component;
