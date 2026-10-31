import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lfnf383db.css';
import '../../css/f/fg865vbkw.css';
import '../../css/w/wuj8wglde.css';
import '../../css/l/laokoxqcm.css';
import '../../css/b/b6p8v5bva.css';
import '../../css/l/li6ieyk3l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lfnf383db wm-shadow"/><path class="fg865vbkw wm-k"/><path class="wm-k wuj8wglde"/><path class="laokoxqcm wm-k"/><path class="b6p8v5bva wm-k"/><path class="li6ieyk3l wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:square-dashed"} {...others} />);
}

export default Component;
