import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/k/knbkhybae.css';
import '../../css/p/pxs4cphfa.css';
import '../../css/j/jj_owxbri.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="nv9qcacyl"><path class="knbkhybae"/><path class="pxs4cphfa"/><path class="jj_owxbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:cr-4x3"} {...others} />);
}

export default Component;
