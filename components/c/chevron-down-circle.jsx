import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o3t99xblo.css';
import '../../css/k/k_gtu_bxt.css';
import '../../css/o/oq0lzkemk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o3t99xblo"/><path class="k_gtu_bxt"/><path class="oq0lzkemk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chevron-down-circle"} {...others} />);
}

export default Component;
