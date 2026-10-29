import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uobrrdb0r.css';
import '../../css/b/brt3y3b_y.css';
import '../../css/l/llbdim04y.css';
import '../../css/x/x3e3f9foh.css';
import '../../css/o/onsk3n4kc.css';
import '../../css/x/xgu1tldns.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uobrrdb0r wm-k"/><path class="brt3y3b_y wm-k"/><path class="llbdim04y wm-k"/><path class="wm-a x3e3f9foh"/><path class="onsk3n4kc wm-a"/><path class="wm-a xgu1tldns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:indent-increase"} {...others} />);
}

export default Component;
