import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vio6g0g3e.css';
import '../../css/a/a-cg93bse.css';
import '../../css/m/mci4__bjo.css';
import '../../css/q/qvf7q1z6q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="vio6g0g3e"/><path class="a-cg93bse"/><rect class="mci4__bjo"/><path class="qvf7q1z6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:archive"} {...others} />);
}

export default Component;
