import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hkswdlqjs.css';
import '../../css/v/vr61ztbkn.css';
import '../../css/x/x1p2naccl.css';
import '../../css/y/ylp7ht2ne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hkswdlqjs"/><path class="vr61ztbkn"/><path class="x1p2naccl"/><path class="ylp7ht2ne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hand-touch-interaction"} {...others} />);
}

export default Component;
