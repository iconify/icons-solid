import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1o9_5b1f.css';
import '../../css/q/q4_jiabge.css';
import '../../css/q/qg4jwebgh.css';
import '../../css/d/d9j05mb-b.css';
import '../../css/w/wdv1_e5jp.css';
import '../../css/x/x6e9icbov.css';
import '../../css/z/z-j6sfb_x.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/z/z82y8_ccv.css';
import '../../css/s/sk86tzbrp.css';
import '../../css/j/jm_jscbmv.css';
import '../../css/f/fpflvybck.css';
import '../../css/c/c89x67bly.css';
import '../../css/n/ng-9v7brm.css';

const viewBox = {"width":72,"height":72};
const content = `<ellipse class="p1o9_5b1f"/><ellipse class="q4_jiabge"/><path class="qg4jwebgh"/><path class="d9j05mb-b"/><path class="wdv1_e5jp"/><path class="x6e9icbov"/><path class="z-j6sfb_x"/><g class="x8poo_bjf"><path class="z82y8_ccv"/><ellipse class="sk86tzbrp"/><path class="jm_jscbmv"/><path class="fpflvybck"/><path class="c89x67bly"/><path class="ng-9v7brm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:motorcycle"} {...others} />);
}

export default Component;
