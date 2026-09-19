import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/q/qv6px5fsd.css';
import '../../css/g/gxvdf_hdg.css';
import '../../css/j/j_wj-105g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="qv6px5fsd"/><path class="gxvdf_hdg"/><path class="j_wj-105g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:phone-outgoing-one"} {...others} />);
}

export default Component;
