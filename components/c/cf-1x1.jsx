import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy6v7eb4r.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t9qd81bih.css';
import '../../css/n/n_6_7obhg.css';
import '../../css/b/bt1r72b1s.css';
import '../../css/r/r47cts99f.css';
import '../../css/j/j1fq9dbus.css';
import '../../css/t/tuy_xfbdt.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGIm7SndZc"><path class="jy6v7eb4r"/></clipPath></defs><g clip-path="url(#SVGIm7SndZc)" class="d2kvgvbvc"><path class="t9qd81bih"/><path class="n_6_7obhg"/><path class="bt1r72b1s"/><path class="r47cts99f"/><path class="j1fq9dbus"/><path class="tuy_xfbdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:cf-1x1"} {...others} />);
}

export default Component;
