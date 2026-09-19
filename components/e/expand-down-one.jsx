import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/z1618sbnc.css';
import '../../css/s/sl_6iq7_n.css';
import '../../css/k/kk9dm5zdk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="z1618sbnc"/><path class="sl_6iq7_n"/><path class="kk9dm5zdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:expand-down-one"} {...others} />);
}

export default Component;
