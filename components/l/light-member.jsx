import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/b/bufrfgx_w.css';
import '../../css/v/vk38bysgy.css';
import '../../css/h/h1nxzy2nz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="bufrfgx_w"/><path class="vk38bysgy"/><path class="h1nxzy2nz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:light-member"} {...others} />);
}

export default Component;
