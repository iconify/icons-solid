import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v1kv4f3wb.css';
import '../../css/n/ni8xmk99j.css';
import '../../css/s/si2jfabzm.css';
import '../../css/z/zt1e34j_a.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="v1kv4f3wb"/><path class="ni8xmk99j"/><path class="si2jfabzm"/><path class="zt1e34j_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:grin-stars-outline"} {...others} />);
}

export default Component;
