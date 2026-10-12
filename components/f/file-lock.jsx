import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o8evguv9q.css';
import '../../css/m/mi1r_-bbb.css';
import '../../css/d/dq8xtjbji.css';
import '../../css/x/xi2rjybhk.css';
import '../../css/i/ij512abgy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o8evguv9q"/><path class="mi1r_-bbb"/><path class="dq8xtjbji"/><rect class="xi2rjybhk"/><path class="ij512abgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-lock"} {...others} />);
}

export default Component;
