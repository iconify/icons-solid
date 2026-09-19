import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2-oz292v.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/d/d32pn-bfm.css';
import '../../css/g/gep5v0brx.css';
import '../../css/u/uisxfqgmu.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGcm7mZdQN"><path class="q2-oz292v"/></clipPath></defs><g clip-path="url(#SVGcm7mZdQN)" transform="translate(51.3)scale(.9375)" class="nv9qcacyl"><path class="d32pn-bfm"/><path class="gep5v0brx"/><path class="uisxfqgmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:nr-4x3"} {...others} />);
}

export default Component;
