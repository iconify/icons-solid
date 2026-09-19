import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtgiyibhq.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/q/qz-ajo1sf.css';
import '../../css/p/ps6tosb7b.css';
import '../../css/z/z-hhoneeg.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGlzcB9Ikf"><path class="wtgiyibhq"/></clipPath></defs><g clip-path="url(#SVGlzcB9Ikf)" transform="translate(79.5 -32)" class="nv9qcacyl"><path class="qz-ajo1sf"/><path class="ps6tosb7b"/><path class="z-hhoneeg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:cg-4x3"} {...others} />);
}

export default Component;
