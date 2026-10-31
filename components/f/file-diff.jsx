import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ubf4oyisq.css';
import '../../css/w/wiaiswbpp.css';
import '../../css/d/d--6yyqua.css';
import '../../css/f/feq5ohddx.css';
import '../../css/f/fk28f9b3k.css';
import '../../css/g/glipz3bwb.css';
import '../../css/k/k75dg2bgc.css';
import '../../css/l/ldtl9_b3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ubf4oyisq wm-k"/><path class="wiaiswbpp wm-deco"/><path class="d--6yyqua wm-k"/><path class="feq5ohddx wm-k"/><path class="fk28f9b3k wm-shadow"/><path class="glipz3bwb wm-shine"/><path class="k75dg2bgc wm-shine"/><path class="ldtl9_b3i wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:file-diff"} {...others} />);
}

export default Component;
