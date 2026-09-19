import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j41nt_b2y.css';
import '../../css/s/saxwgqbsi.css';
import '../../css/x/xtnq2r1jb.css';
import '../../css/k/ki_s5dbae.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="j41nt_b2y"/><path class="saxwgqbsi"/><path clip-rule="evenodd" class="xtnq2r1jb"/><path class="ki_s5dbae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:close-remind"} {...others} />);
}

export default Component;
