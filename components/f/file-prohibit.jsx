import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oe6rs50rm.css';
import '../../css/a/a2lspcyco.css';
import '../../css/c/cq66con3t.css';
import '../../css/m/mkemt7zoa.css';
import '../../css/k/k5u1nxbdp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oe6rs50rm"/><path class="a2lspcyco"/><path class="cq66con3t"/><circle class="mkemt7zoa"/><path class="k5u1nxbdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-prohibit"} {...others} />);
}

export default Component;
