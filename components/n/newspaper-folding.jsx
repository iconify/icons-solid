import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/ne_mu8bfp.css';
import '../../css/v/vqwjveb2n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ne_mu8bfp"/><path class="vqwjveb2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:newspaper-folding"} {...others} />);
}

export default Component;
