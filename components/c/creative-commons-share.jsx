import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ycqd8f9yh.css';
import '../../css/x/x3__3mamu.css';
import '../../css/n/nkr7vc-2t.css';
import '../../css/s/sgxujsb_j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ycqd8f9yh"/><path class="x3__3mamu"/><path class="nkr7vc-2t"/><path class="sgxujsb_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:creative-commons-share"} {...others} />);
}

export default Component;
