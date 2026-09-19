import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy6v7eb4r.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rbxrtkbxv.css';
import '../../css/z/zeizwlb5f.css';
import '../../css/i/i6ml5ybdb.css';
import '../../css/z/z6501h0ds.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGIm7SndZc"><path class="jy6v7eb4r"/></clipPath></defs><g clip-path="url(#SVGIm7SndZc)" class="d2kvgvbvc"><path class="rbxrtkbxv"/><path class="zeizwlb5f"/><path class="i6ml5ybdb"/><path class="z6501h0ds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:pa-1x1"} {...others} />);
}

export default Component;
