import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/q/qx9az0sij.css';
import '../../css/n/n09s2ng1v.css';
import '../../css/f/fhifo6_0i.css';
import '../../css/w/wxxqj4b5s.css';
import '../../css/k/kbrd_6bhc.css';
import '../../css/p/pcohujbbx.css';
import '../../css/k/ku23ne5fg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="qx9az0sij"/><path class="n09s2ng1v"/><path class="fhifo6_0i"/><path class="wxxqj4b5s"/><path class="kbrd_6bhc"/><path class="pcohujbbx"/><path class="ku23ne5fg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:connection-point"} {...others} />);
}

export default Component;
