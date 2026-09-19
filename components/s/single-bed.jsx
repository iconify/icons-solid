import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/f2ykp2y6k.css';
import '../../css/r/r8210dyua.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="f2ykp2y6k"/><path class="r8210dyua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:single-bed"} {...others} />);
}

export default Component;
