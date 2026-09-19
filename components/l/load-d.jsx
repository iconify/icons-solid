import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kctsw0bva.css';
import '../../css/o/op59-tzcy.css';
import '../../css/c/c8ph4yicr.css';
import '../../css/z/zfkuz3bxo.css';
import '../../css/w/w755-37rp.css';
import '../../css/s/saeal4bor.css';
import '../../css/a/ak0rqdf9v.css';
import '../../css/x/x3rhm19yk.css';
import '../../css/f/f15xbhbqa.css';
import '../../css/c/cir76ccyg.css';
import '../../css/h/hadxyab2y.css';
import '../../css/y/y6xgkrbwc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kctsw0bva"/><path class="op59-tzcy"/><path class="c8ph4yicr"/><path class="zfkuz3bxo"/><path class="w755-37rp"/><path class="saeal4bor"/><path class="ak0rqdf9v"/><path class="x3rhm19yk"/><path class="f15xbhbqa"/><path class="cir76ccyg"/><path class="hadxyab2y"/><path class="y6xgkrbwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:load-d"} {...others} />);
}

export default Component;
