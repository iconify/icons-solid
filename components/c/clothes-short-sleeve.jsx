import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/s-hoz3q5v.css';
import '../../css/f/fr7ysqbpn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="s-hoz3q5v"/><path class="fr7ysqbpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:clothes-short-sleeve"} {...others} />);
}

export default Component;
