import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/k/k7jjkccoh.css';
import '../../css/e/e0po932pn.css';
import '../../css/a/a-qm1v87i.css';
import '../../css/a/a4t5s6ban.css';
import '../../css/f/ft43v2bhp.css';
import '../../css/a/awq19d15w.css';
import '../../css/n/n3s7cybuu.css';
import '../../css/z/zzld5ibsk.css';
import '../../css/j/j07yp5vxe.css';
import '../../css/f/f212grh4b.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="k7jjkccoh"/><path clip-rule="evenodd" class="e0po932pn"/><path clip-rule="evenodd" class="a-qm1v87i"/><path class="a4t5s6ban"/><path clip-rule="evenodd" class="ft43v2bhp"/></g><path clip-rule="evenodd" class="awq19d15w"/><path clip-rule="evenodd" class="n3s7cybuu"/><path clip-rule="evenodd" class="zzld5ibsk"/><path clip-rule="evenodd" class="j07yp5vxe"/><path clip-rule="evenodd" class="f212grh4b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:trophy-print"} {...others} />);
}

export default Component;
