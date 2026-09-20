import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/z/zpjnchhxm.css';
import '../../css/n/nffu2igiy.css';
import '../../css/k/kf_ev_6ui.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="zpjnchhxm"/><path class="nffu2igiy"/><path class="kf_ev_6ui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:consellation"} {...others} />);
}

export default Component;
