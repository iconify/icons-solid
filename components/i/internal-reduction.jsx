import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e0pazubmt.css';
import '../../css/s/si5nizbso.css';
import '../../css/y/ypj-nwmud.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="e0pazubmt"/><path clip-rule="evenodd" class="si5nizbso"/><path class="ypj-nwmud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:internal-reduction"} {...others} />);
}

export default Component;
