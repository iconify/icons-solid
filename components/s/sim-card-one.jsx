import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u4dcq5bhm.css';
import '../../css/i/i4sh_9yea.css';
import '../../css/r/rblznoj2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u4dcq5bhm"/><path class="i4sh_9yea"/><path class="rblznoj2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sim-card-one"} {...others} />);
}

export default Component;
