import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b5trlgb8s.css';
import '../../css/t/tdycdvbrp.css';
import '../../css/b/bv7ax-9hf.css';
import '../../css/d/d8w36gb3r.css';
import '../../css/j/ju2j2ccwn.css';
import '../../css/n/nby85dbiv.css';
import '../../css/l/l1vfl3b_o.css';
import '../../css/d/dt5q5xbol.css';
import '../../css/w/wbiruc2ir.css';
import '../../css/o/ocr5rubuc.css';
import '../../css/m/mmo9zlbce.css';
import '../../css/m/mauz-wcit.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="b5trlgb8s"/><path class="tdycdvbrp"/><path class="bv7ax-9hf"/><path class="d8w36gb3r"/><path class="ju2j2ccwn"/><path class="nby85dbiv"/><path class="l1vfl3b_o"/><path class="dt5q5xbol"/><path class="wbiruc2ir"/><path class="ocr5rubuc"/><path class="mmo9zlbce"/><path class="mauz-wcit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"unjs:pathe"} {...others} />);
}

export default Component;
