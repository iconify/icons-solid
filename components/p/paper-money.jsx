import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/w/wwkx2i9yc.css';
import '../../css/n/nb9olfb4n.css';
import '../../css/o/o1ol_lb8x.css';
import '../../css/m/mdr23-23s.css';
import '../../css/y/yyt9bi0bw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="wwkx2i9yc"/><path class="nb9olfb4n"/><path class="o1ol_lb8x"/><path class="mdr23-23s"/><path class="yyt9bi0bw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:paper-money"} {...others} />);
}

export default Component;
