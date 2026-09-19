import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbk05b36b.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/p/ph3jxnbzf.css';
import '../../css/g/g8flay2tg.css';
import '../../css/o/ofzjnwu4n.css';
import '../../css/v/vko27qbmj.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGSJkC5dXi"><path class="nbk05b36b"/></clipPath></defs><g clip-path="url(#SVGSJkC5dXi)" transform="scale(.9375)" class="nv9qcacyl"><path class="ph3jxnbzf"/><path class="g8flay2tg"/><path class="ofzjnwu4n"/><path class="vko27qbmj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:kw-4x3"} {...others} />);
}

export default Component;
