import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xx6-8zblw.css';
import '../../css/e/ej2gaiyye.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="xx6-8zblw"/><path class="ej2gaiyye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:swing"} {...others} />);
}

export default Component;
