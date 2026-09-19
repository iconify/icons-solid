import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/a/aojj5bvzh.css';
import '../../css/d/d-d-usbel.css';
import '../../css/i/izt-8nbfn.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="nv9qcacyl"><path class="aojj5bvzh"/><path class="d-d-usbel"/><path class="izt-8nbfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:co-4x3"} {...others} />);
}

export default Component;
