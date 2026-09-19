import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dqrnzup_h.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/z/zl2d9vb2q.css';
import '../../css/b/bwy70_bwi.css';
import '../../css/m/mtb9hsvwq.css';
import '../../css/j/jueoxrigg.css';
import '../../css/k/k5l5yobbw.css';
import '../../css/d/dam3l-0xr.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGVWxBZckZ"><path class="dqrnzup_h"/></clipPath></defs><g clip-path="url(#SVGVWxBZckZ)" transform="translate(-71.9)scale(1.0248)"><g class="nv9qcacyl"><path class="zl2d9vb2q"/><path class="bwy70_bwi"/><path class="mtb9hsvwq"/><path class="jueoxrigg"/><path class="k5l5yobbw"/><path class="dam3l-0xr"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:za-1x1"} {...others} />);
}

export default Component;
