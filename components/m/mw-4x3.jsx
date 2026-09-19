import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/n/noow99b6h.css';
import '../../css/v/vxci-bb6c.css';
import '../../css/c/c8caqzgai.css';
import '../../css/n/n6_3g1baq.css';
import '../../css/v/veb0yhysz.css';
import '../../css/a/apo48nn-i.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="nv9qcacyl"><path class="noow99b6h"/><path class="vxci-bb6c"/><path class="c8caqzgai"/><path class="n6_3g1baq"/><path class="veb0yhysz"/><path class="apo48nn-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:mw-4x3"} {...others} />);
}

export default Component;
