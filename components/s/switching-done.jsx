import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/t/tunwwzmcn.css';
import '../../css/f/fchd39nkw.css';
import '../../css/m/mxbyflb4g.css';
import '../../css/k/kg_afsawn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="tunwwzmcn"/><path class="fchd39nkw"/><path class="mxbyflb4g"/><path class="kg_afsawn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:switching-done"} {...others} />);
}

export default Component;
