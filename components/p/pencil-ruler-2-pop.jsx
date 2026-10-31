import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/adkhyubfv.css';
import '../../css/i/isn0ssitn.css';
import '../../css/o/oq84k2-ze.css';
import '../../css/u/u75q1xbmj.css';
import '../../css/b/bn66ehbsl.css';
import '../../css/e/e082ixviw.css';
import '../../css/v/vhzbtmbpy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="adkhyubfv"/><path class="isn0ssitn"/><path class="oq84k2-ze"/><path class="u75q1xbmj"/><path class="bn66ehbsl"/><path class="e082ixviw"/><path class="vhzbtmbpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:pencil-ruler-2-pop"} {...others} />);
}

export default Component;
