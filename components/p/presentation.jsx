import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sjl4rgb8t.css';
import '../../css/b/bz1_-8bdx.css';
import '../../css/c/cp_n2zimn.css';
import '../../css/d/dlpf3xbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-90 4.66 14.67)" class="sjl4rgb8t"/><path class="bz1_-8bdx"/><path class="cp_n2zimn"/><path class="dlpf3xbvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:presentation"} {...others} />);
}

export default Component;
