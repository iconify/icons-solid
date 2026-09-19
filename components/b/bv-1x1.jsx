import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy6v7eb4r.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/n/nylue0zjc.css';
import '../../css/b/btmr-no6c.css';
import '../../css/e/ew6hbx4hx.css';
import '../../css/t/t4gnd_7dg.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGIm7SndZc"><path class="jy6v7eb4r"/></clipPath></defs><g clip-path="url(#SVGIm7SndZc)" class="nv9qcacyl"><path class="nylue0zjc"/><path class="btmr-no6c"/><path class="ew6hbx4hx"/><path class="t4gnd_7dg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:bv-1x1"} {...others} />);
}

export default Component;
