import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/t522kglro.css';
import '../../css/g/gnj64u4_i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="t522kglro"/><path class="gnj64u4_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:trousers-bell-bottoms"} {...others} />);
}

export default Component;
