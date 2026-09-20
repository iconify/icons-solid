import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/a/ar9otkykv.css';
import '../../css/d/dn74iwrvw.css';
import '../../css/q/qvi_zccko.css';
import '../../css/u/uwaif7iri.css';
import '../../css/f/fvrom9b2o.css';
import '../../css/z/ziyansobv.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g class="xyjtgccot"><path class="ar9otkykv"/><path clip-rule="evenodd" class="dn74iwrvw"/><path class="qvi_zccko"/><path clip-rule="evenodd" class="uwaif7iri"/></g><path clip-rule="evenodd" class="fvrom9b2o"/><path clip-rule="evenodd" class="ziyansobv"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:hammer-sledge-circle-off"} {...others} />);
}

export default Component;
