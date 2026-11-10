import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dpkf190gy.css';
import '../../css/j/jiopudb-q.css';
import '../../css/h/he9jvab1l.css';
import '../../css/m/mkemt7zoa.css';
import '../../css/k/k5u1nxbdp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dpkf190gy"/><path class="jiopudb-q"/><path class="he9jvab1l"/><circle class="mkemt7zoa"/><path class="k5u1nxbdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-prohibit"} {...others} />);
}

export default Component;
