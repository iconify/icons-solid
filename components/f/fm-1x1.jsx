import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qoyn5x1dl.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/e/e3pg-k-br.css';
import '../../css/l/l8bjx0nkx.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGUzxffciU"><path class="qoyn5x1dl"/></clipPath></defs><g clip-path="url(#SVGUzxffciU)" transform="translate(-252)scale(1.032)" class="nv9qcacyl"><path class="e3pg-k-br"/><path class="l8bjx0nkx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:fm-1x1"} {...others} />);
}

export default Component;
