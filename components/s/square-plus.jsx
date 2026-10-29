import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kbzksu78q.css';
import '../../css/t/t6yb2-bzn.css';
import '../../css/n/nc_5sobzd.css';
import '../../css/v/vxg4k9b0f.css';
import '../../css/c/c0t8as58m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kbzksu78q wm-k"/><path class="t6yb2-bzn wm-k"/><path class="nc_5sobzd wm-k"/><path class="vxg4k9b0f wm-shine"/><path class="c0t8as58m wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:square-plus"} {...others} />);
}

export default Component;
