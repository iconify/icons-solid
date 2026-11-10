import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sumn4_f2z.css';
import '../../css/i/iz-ucxb1g.css';
import '../../css/u/uu9-2jbld.css';
import '../../css/a/ay82iv7eb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sumn4_f2z"/><path class="iz-ucxb1g"/><circle class="uu9-2jbld"/><path class="ay82iv7eb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:remote-controller"} {...others} />);
}

export default Component;
