import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3fsewyjy.css';
import '../../css/o/oqt2alb1u.css';
import '../../css/r/r90bv5xxa.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/a/at1-vo2rz.css';
import '../../css/s/scnjzh2uf.css';
import '../../css/v/vsbco_bzd.css';
import '../../css/t/t3zomugvn.css';
import '../../css/c/c482gxvmg.css';
import '../../css/u/u5m82bcme.css';
import '../../css/a/a2nm04bof.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="e3fsewyjy"><path class="oqt2alb1u"/><path class="r90bv5xxa"/></g><g class="jn8qy4bru"><path class="at1-vo2rz"/><path class="scnjzh2uf"/><path class="vsbco_bzd"/><path class="t3zomugvn"/><path class="c482gxvmg"/><path class="u5m82bcme"/><path class="a2nm04bof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hairy-creature"} {...others} />);
}

export default Component;
