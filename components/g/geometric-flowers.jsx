import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lrtadt_mm.css';
import '../../css/p/pmmx72kkg.css';
import '../../css/y/yz9-03dhq.css';
import '../../css/r/ro40x6bjb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="lrtadt_mm"/><path class="pmmx72kkg"/><path class="yz9-03dhq"/><path class="ro40x6bjb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:geometric-flowers"} {...others} />);
}

export default Component;
