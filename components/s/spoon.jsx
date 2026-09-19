import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/znwb00b4h.css';
import '../../css/d/dy-fnk7uq.css';
import '../../css/k/ke-m6xwkf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><rect class="znwb00b4h"/><path class="dy-fnk7uq"/><rect class="ke-m6xwkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:spoon"} {...others} />);
}

export default Component;
