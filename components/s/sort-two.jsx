import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/po7o1smbp.css';
import '../../css/l/l3xff8bif.css';
import '../../css/m/miz2jhbir.css';
import '../../css/b/b_o-qc--s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="po7o1smbp"/><path class="l3xff8bif"/><path class="miz2jhbir"/><path class="b_o-qc--s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sort-two"} {...others} />);
}

export default Component;
