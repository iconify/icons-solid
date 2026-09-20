import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqzokdb4f.css';
import '../../css/c/c8dhlpbpv.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/w/whpvcqbgc.css';
import '../../css/x/x8jd4ij4i.css';
import '../../css/p/pgz2uxb0l.css';
import '../../css/t/t-r36dbrl.css';
import '../../css/e/erzc115ce.css';
import '../../css/d/dqx4facqy.css';
import '../../css/l/lt0-1kbni.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="uqzokdb4f"/><path class="c8dhlpbpv"/><g class="brzn_0bpr"><path class="whpvcqbgc"/><path class="x8jd4ij4i"/><path class="pgz2uxb0l"/><path class="t-r36dbrl"/><path class="erzc115ce"/><path class="dqx4facqy"/><path class="lt0-1kbni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:pretzel2"} {...others} />);
}

export default Component;
