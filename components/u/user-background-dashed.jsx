import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n94z3rk9g.css';
import '../../css/x/xej3gr7nl.css';
import '../../css/v/vgkwz8q2y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n94z3rk9g"/><path class="xej3gr7nl"/><path class="vgkwz8q2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-background-dashed"} {...others} />);
}

export default Component;
