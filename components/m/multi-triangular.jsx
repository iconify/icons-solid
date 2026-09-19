import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/uhmna2bmj.css';
import '../../css/w/wesntbb0s.css';
import '../../css/x/x9mfbm6ku.css';
import '../../css/b/b9profbtv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="uhmna2bmj"/><path class="wesntbb0s"/><path class="x9mfbm6ku"/><path class="b9profbtv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:multi-triangular"} {...others} />);
}

export default Component;
