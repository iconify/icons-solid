import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/nrzbhp09d.css';
import '../../css/s/s_sqn_0_b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="nrzbhp09d"/><path class="s_sqn_0_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:share-three"} {...others} />);
}

export default Component;
