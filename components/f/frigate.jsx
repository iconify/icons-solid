import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/am4lb-bdv.css';
import '../../css/l/ln7fn5cus.css';
import '../../css/s/scyn38bvf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="am4lb-bdv"/><path class="ln7fn5cus"/><path class="scyn38bvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:frigate"} {...others} />);
}

export default Component;
