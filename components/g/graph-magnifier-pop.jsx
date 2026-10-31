import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fesy9nboh.css';
import '../../css/z/z_lc1ja9y.css';
import '../../css/f/fwb1fj9xx.css';
import '../../css/p/p7jqmjblr.css';
import '../../css/d/dhpe_idlm.css';
import '../../css/z/zrxtwl66l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="fesy9nboh"/><path class="z_lc1ja9y"/><path class="fwb1fj9xx"/><path class="p7jqmjblr"/><path class="dhpe_idlm"/><path class="zrxtwl66l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:graph-magnifier-pop"} {...others} />);
}

export default Component;
