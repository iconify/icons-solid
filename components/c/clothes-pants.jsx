import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/tzgmqab_p.css';
import '../../css/p/p_jae5bja.css';
import '../../css/t/tkqy6db1f.css';
import '../../css/l/lguuntben.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="tzgmqab_p"/><path class="p_jae5bja"/><path class="tkqy6db1f"/><path class="lguuntben"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:clothes-pants"} {...others} />);
}

export default Component;
