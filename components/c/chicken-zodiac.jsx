import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hrdn3vu_n.css';
import '../../css/k/k2eweukar.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="hrdn3vu_n"/><path class="k2eweukar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:chicken-zodiac"} {...others} />);
}

export default Component;
