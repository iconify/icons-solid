import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rbb69cszp.css';
import '../../css/y/ym_q5kb_w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><circle class="rbb69cszp"/><path class="ym_q5kb_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:diamond-ring"} {...others} />);
}

export default Component;
