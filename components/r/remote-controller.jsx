import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a3cvfuttx.css';
import '../../css/g/g5-uz2b5k.css';
import '../../css/u/uu9-2jbld.css';
import '../../css/a/ay82iv7eb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a3cvfuttx"/><rect transform="matrix(0 -1 -1 0 19.24 22.27)" class="g5-uz2b5k"/><circle class="uu9-2jbld"/><path class="ay82iv7eb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:remote-controller"} {...others} />);
}

export default Component;
