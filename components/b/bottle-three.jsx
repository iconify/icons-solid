import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/ripdjiu2y.css';
import '../../css/k/kxpgxsbnl.css';
import '../../css/a/an0us4bhe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ripdjiu2y"/><path class="kxpgxsbnl"/><rect class="an0us4bhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bottle-three"} {...others} />);
}

export default Component;
