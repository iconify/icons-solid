import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/bz6ez9b7t.css';
import '../../css/r/rr3f_jb7l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="bz6ez9b7t"/><path class="rr3f_jb7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:corner-down-left"} {...others} />);
}

export default Component;
