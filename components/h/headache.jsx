import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ws-r5-ydn.css';
import '../../css/k/krwwbtbor.css';
import '../../css/l/lj69jzmxb.css';
import '../../css/t/to5_hpm1w.css';
import '../../css/g/gly3v1beh.css';
import '../../css/p/pibzzub_g.css';
import '../../css/e/e3fsewyjy.css';
import '../../css/s/smq-tk8nf.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGj4LxvbzR" class="ws-r5-ydn"/></defs><path class="krwwbtbor"/><path class="lj69jzmxb"/><g class="to5_hpm1w"><path class="gly3v1beh"/><path class="pibzzub_g"/><use href="#SVGj4LxvbzR" class="e3fsewyjy"/></g><use href="#SVGj4LxvbzR" class="smq-tk8nf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:headache"} {...others} />);
}

export default Component;
