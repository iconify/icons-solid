import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7sxp_8xj.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/a/a4r5f-bna.css';
import '../../css/h/hs8rhbbiw.css';
import '../../css/b/b_b0m5b5a.css';
import '../../css/p/pone3ybvh.css';
import '../../css/v/vofpcaclg.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGjELyLdye"><path class="d7sxp_8xj"/></clipPath></defs><g clip-path="url(#SVGjELyLdye)" transform="translate(110.5)scale(.9375)"><g class="nv9qcacyl"><path class="a4r5f-bna"/><path class="hs8rhbbiw"/><path class="b_b0m5b5a"/><path class="pone3ybvh"/><path class="vofpcaclg"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:jo-4x3"} {...others} />);
}

export default Component;
