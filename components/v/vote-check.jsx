import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vtv2p9w9w.css';
import '../../css/u/uhphs4b5b.css';
import '../../css/d/du_wjmbiu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vtv2p9w9w"/><path class="uhphs4b5b"/><path class="du_wjmbiu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:vote-check"} {...others} />);
}

export default Component;
