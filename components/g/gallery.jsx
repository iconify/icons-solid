import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f8wrpbb-w.css';
import '../../css/q/q-6w_cchj.css';
import '../../css/n/ntripxb-j.css';
import '../../css/x/xuxu0gbmu.css';
import '../../css/s/s31s--ubn.css';
import '../../css/e/eh66j1bif.css';
import '../../css/n/n1p_z3bgs.css';
import '../../css/e/eeq94bb1e.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f8wrpbb-w"/><path class="q-6w_cchj"/><path class="ntripxb-j"/><path clip-rule="evenodd" class="xuxu0gbmu"/><path class="s31s--ubn"/><path class="eh66j1bif"/><path class="n1p_z3bgs"/><path class="eeq94bb1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:gallery"} {...others} />);
}

export default Component;
