import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e0pazubmt.css';
import '../../css/w/wn5rh4bnl.css';
import '../../css/w/w19wwz2kz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="e0pazubmt"/><path clip-rule="evenodd" class="wn5rh4bnl"/><path class="w19wwz2kz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:internal-expansion"} {...others} />);
}

export default Component;
