import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c19e3fb8h.css';
import '../../css/j/jwglo1b2k.css';
import '../../css/s/ssb9vgbls.css';
import '../../css/b/bq7924smv.css';
import '../../css/l/lvwbd5bah.css';
import '../../css/s/s6tdv41ii.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/s/slrxddbaz.css';
import '../../css/t/tkmthkbrx.css';
import '../../css/c/cq2bsyb8b.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="c19e3fb8h"/><path class="jwglo1b2k"/><path class="ssb9vgbls"/><path class="bq7924smv"/><path class="lvwbd5bah"/><path class="s6tdv41ii"/><g class="brzn_0bpr"><path class="slrxddbaz"/><path class="tkmthkbrx"/><path class="cq2bsyb8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hot-beverage"} {...others} />);
}

export default Component;
