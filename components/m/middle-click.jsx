import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/n/n_ndx-jtg.css';
import '../../css/u/ue1cwsbvg.css';
import '../../css/a/aodmmac_n.css';
import '../../css/n/nww-nkb8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="n_ndx-jtg"/><path class="ue1cwsbvg"/><path class="aodmmac_n"/><path class="nww-nkb8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:middle-click"} {...others} />);
}

export default Component;
