import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/b/b3pr9bc_z.css';
import '../../css/i/ihocy9b2c.css';
import '../../css/l/lkt5jbcct.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="nv9qcacyl"><path class="b3pr9bc_z"/><path class="ihocy9b2c"/><path class="lkt5jbcct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:be-4x3"} {...others} />);
}

export default Component;
