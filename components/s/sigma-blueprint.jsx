import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qmgrdexng.css';
import '../../css/r/r4dlvobwc.css';
import '../../css/x/x7pgg2f2r.css';
import '../../css/o/o1fxrtmvk.css';
import '../../css/e/ekf-2nkms.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="qmgrdexng wm-deco"/><path class="r4dlvobwc wm-deco"/><path class="wm-deco x7pgg2f2r"/><path class="o1fxrtmvk wm-k"/><path class="ekf-2nkms wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sigma-blueprint"} {...others} />);
}

export default Component;
