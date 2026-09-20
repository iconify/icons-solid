import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9997h4rm.css';
import '../../css/s/s6iikjgcv.css';
import '../../css/z/zypokm1qp.css';
import '../../css/y/yppeerbgr.css';
import '../../css/k/k4ztslb8m.css';
import '../../css/i/i5ctt2hyj.css';
import '../../css/m/m8oleibav.css';
import '../../css/i/ih7dl4x3y.css';
import '../../css/c/cwa8r9uhi.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGopWTHdnm" class="b9997h4rm"/></defs><use href="#SVGopWTHdnm"/><circle class="s6iikjgcv"/><path class="zypokm1qp"/><path class="yppeerbgr"/><use href="#SVGopWTHdnm"/><path class="k4ztslb8m"/><path class="i5ctt2hyj"/><path class="m8oleibav"/><path class="ih7dl4x3y"/><path class="cwa8r9uhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:anxious-face-with-sweat"} {...others} />);
}

export default Component;
