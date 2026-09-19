import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wy5b9ibxs.css';
import '../../css/l/llf2nduef.css';
import '../../css/s/s71mxefap.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="wy5b9ibxs"/><path class="llf2nduef"/><path class="s71mxefap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:auto-width"} {...others} />);
}

export default Component;
