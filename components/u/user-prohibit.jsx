import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bxr-pzb2a.css';
import '../../css/s/sfok2h7eh.css';
import '../../css/b/b_-gkxb7l.css';
import '../../css/e/e8ljvv22o.css';
import '../../css/v/vppvk20zr.css';
import '../../css/x/x9g6iubus.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(90 19 18.68)" class="bxr-pzb2a"/><path class="sfok2h7eh"/><path class="b_-gkxb7l"/><path class="e8ljvv22o"/><path class="vppvk20zr"/><path class="x9g6iubus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-prohibit"} {...others} />);
}

export default Component;
