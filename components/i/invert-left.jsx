import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/g_py04b8w.css';
import '../../css/t/tvb2vl9-r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="g_py04b8w"/><path class="tvb2vl9-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:invert-left"} {...others} />);
}

export default Component;
