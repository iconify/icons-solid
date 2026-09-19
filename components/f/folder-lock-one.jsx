import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r00m7gbsq.css';
import '../../css/x/xh-v6_tnt.css';
import '../../css/v/v-b1xabbp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="r00m7gbsq"/><rect class="xh-v6_tnt"/><path class="v-b1xabbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:folder-lock-one"} {...others} />);
}

export default Component;
