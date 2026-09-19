import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/h/hgt__cbcr.css';
import '../../css/b/bz2tnjbek.css';
import '../../css/x/xqm6y8bvi.css';
import '../../css/s/smfp-xbkt.css';
import '../../css/n/n9x4pt7yo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="hgt__cbcr"/><path class="bz2tnjbek"/><path class="xqm6y8bvi"/><path class="smfp-xbkt"/><path class="n9x4pt7yo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:water-rate"} {...others} />);
}

export default Component;
