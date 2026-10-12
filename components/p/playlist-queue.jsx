import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ldmla3b0f.css';
import '../../css/v/v59k4c3ri.css';
import '../../css/t/talm9jbul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ldmla3b0f"/><rect transform="matrix(0 -1 -1 0 21.42 10.37)" class="v59k4c3ri"/><rect transform="matrix(0 -1 -1 0 21.42 10.37)" class="talm9jbul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:playlist-queue"} {...others} />);
}

export default Component;
