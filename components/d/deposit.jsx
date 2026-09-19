import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/i4uc5cc8z.css';
import '../../css/f/f1qfk8mkz.css';
import '../../css/e/etchjrk2q.css';
import '../../css/t/tiotwge_v.css';
import '../../css/c/cp25vmlpu.css';
import '../../css/z/z13290slm.css';
import '../../css/l/l5pg9cb-a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="i4uc5cc8z"/><path class="f1qfk8mkz"/><path class="etchjrk2q"/><path class="tiotwge_v"/><path class="cp25vmlpu"/><path class="z13290slm"/><path class="l5pg9cb-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:deposit"} {...others} />);
}

export default Component;
