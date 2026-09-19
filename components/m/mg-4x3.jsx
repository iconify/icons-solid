import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/t/tnva5duer.css';
import '../../css/i/ixl6s1ssc.css';
import '../../css/z/zh84q581l.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="nv9qcacyl"><path class="tnva5duer"/><path class="ixl6s1ssc"/><path class="zh84q581l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:mg-4x3"} {...others} />);
}

export default Component;
