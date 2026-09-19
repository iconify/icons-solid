import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mkszfzb9n.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/v/vu-88_bmr.css';
import '../../css/z/zn9txewhb.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGGkFDRddX"><path class="mkszfzb9n"/></clipPath></defs><g clip-path="url(#SVGGkFDRddX)" transform="translate(76.3)scale(.94)" class="nv9qcacyl"><path class="vu-88_bmr"/><path class="zn9txewhb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:fm-4x3"} {...others} />);
}

export default Component;
