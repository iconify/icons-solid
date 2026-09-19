import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hib-_bcgr.css';
import '../../css/o/oq0tn5b5z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="hib-_bcgr"/><path class="oq0tn5b5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:stereo-nesting"} {...others} />);
}

export default Component;
