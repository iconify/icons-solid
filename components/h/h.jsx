import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hmhethf3g.css';
import '../../css/e/evz31rqer.css';
import '../../css/z/z4tkxcc3q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="hmhethf3g"/><path class="evz31rqer"/><path class="z4tkxcc3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:h"} {...others} />);
}

export default Component;
