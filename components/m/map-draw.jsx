import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hu54_pngs.css';
import '../../css/c/c9-3hsbyg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="hu54_pngs"/><path class="c9-3hsbyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:map-draw"} {...others} />);
}

export default Component;
