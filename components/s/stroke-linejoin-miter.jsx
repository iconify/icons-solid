import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y2r_edcdm.css';
import '../../css/m/mt-o-cafs.css';
import '../../css/m/mdoj1bg5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y2r_edcdm"/><path class="mt-o-cafs"/><path class="mdoj1bg5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:stroke-linejoin-miter"} {...others} />);
}

export default Component;
