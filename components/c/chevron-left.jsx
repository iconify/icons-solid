import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/edeya_bls.css';
import '../../css/s/s6051y_6l.css';
import '../../css/c/cbsyy8bat.css';
import '../../css/q/qnugpiw0w.css';
import '../../css/c/cswzr58fp.css';
import '../../css/a/a0d_nsbff.css';
import '../../css/f/flhtn-xvj.css';
import '../../css/a/arb7x9bui.css';
import '../../css/p/p9q7z410p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="edeya_bls wm-shadow"/><path class="s6051y_6l wm-shadow"/><path class="cbsyy8bat"/><path class="qnugpiw0w"/><path class="cswzr58fp"/><path class="a0d_nsbff"/><path class="flhtn-xvj wm-shine"/><path class="arb7x9bui wm-shine"/><path class="p9q7z410p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:chevron-left"} {...others} />);
}

export default Component;
