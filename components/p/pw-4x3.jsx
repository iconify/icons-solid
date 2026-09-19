import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i__wmzbbt.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/s/st15vmbze.css';
import '../../css/a/a3bacpb2t.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGnsWPic8d"><path class="i__wmzbbt"/></clipPath></defs><g clip-path="url(#SVGnsWPic8d)" transform="translate(70.3)" class="nv9qcacyl"><path class="st15vmbze"/><path class="a3bacpb2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:pw-4x3"} {...others} />);
}

export default Component;
