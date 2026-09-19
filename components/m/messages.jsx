import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/utf5_xbzs.css';
import '../../css/w/whkdn_tzm.css';
import '../../css/z/zil4b_b8y.css';
import '../../css/g/ggi7dz0kv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="utf5_xbzs"/><path class="whkdn_tzm"/><path class="zil4b_b8y"/><path class="ggi7dz0kv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:messages"} {...others} />);
}

export default Component;
