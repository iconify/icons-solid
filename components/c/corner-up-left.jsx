import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/u99ntq5yv.css';
import '../../css/t/tte4pl5tz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="u99ntq5yv"/><path class="tte4pl5tz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:corner-up-left"} {...others} />);
}

export default Component;
