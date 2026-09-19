import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/blsw_3epl.css';
import '../../css/l/l_lv4vb-l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="blsw_3epl"/><path class="l_lv4vb-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:sippy-cup"} {...others} />);
}

export default Component;
