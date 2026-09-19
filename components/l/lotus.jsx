import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rc3vcn0hy.css';
import '../../css/u/uhnuevbfl.css';
import '../../css/g/g9a30j0te.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="rc3vcn0hy"/><path class="uhnuevbfl"/><path class="g9a30j0te"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:lotus"} {...others} />);
}

export default Component;
