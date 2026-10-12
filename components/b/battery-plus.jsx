import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t9iy3ybyf.css';
import '../../css/a/a24rdcbis.css';
import '../../css/q/qgzo5yb_z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="t9iy3ybyf"/><rect class="a24rdcbis"/><path class="qgzo5yb_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:battery-plus"} {...others} />);
}

export default Component;
