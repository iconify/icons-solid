import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/x/xr-j7kydp.css';
import '../../css/y/y95_6vc2y.css';
import '../../css/h/hj-ppubbn.css';
import '../../css/u/ufqlivblt.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="nv9qcacyl"><path class="xr-j7kydp"/><path class="y95_6vc2y"/><path class="hj-ppubbn"/></g><path class="ufqlivblt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:sn-1x1"} {...others} />);
}

export default Component;
