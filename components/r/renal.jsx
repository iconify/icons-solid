import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/mg427tbmh.css';
import '../../css/b/bfso1_ihz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="mg427tbmh"/><path class="bfso1_ihz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:renal"} {...others} />);
}

export default Component;
