import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kuqhkxone.css';
import '../../css/x/x_0u3xbek.css';
import '../../css/a/aq_hwzb3g.css';
import '../../css/w/wbv-tibxs.css';
import '../../css/b/bd5n0i_hu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kuqhkxone"/><path class="x_0u3xbek"/><circle transform="rotate(90 5.76 19.27)" class="aq_hwzb3g"/><circle transform="rotate(90 14.35 19.27)" class="wbv-tibxs"/><path class="bd5n0i_hu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:forklift"} {...others} />);
}

export default Component;
