import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xmbbiopxh.css';
import '../../css/m/m72evjb7g.css';
import '../../css/u/u5w6i_b9t.css';
import '../../css/y/y618z5bsz.css';
import '../../css/j/j-xpb6lpy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="xmbbiopxh"/><path class="m72evjb7g"/><path class="u5w6i_b9t"/><path class="y618z5bsz"/><path class="j-xpb6lpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:mountain"} {...others} />);
}

export default Component;
