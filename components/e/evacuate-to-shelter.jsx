import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ht0_95voi.css';
import '../../css/x/x4u8pbwjc.css';
import '../../css/d/dx81_-22d.css';
import '../../css/n/n5yygobjd.css';
import '../../css/z/z04drlb1l.css';
import '../../css/t/tfei7xb5y.css';
import '../../css/k/kercf2hwi.css';
import '../../css/f/ffk8tub8k.css';
import '../../css/z/z54hldgen.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ht0_95voi"/><g class="x4u8pbwjc"><path class="dx81_-22d"/><circle class="n5yygobjd"/></g><g class="z04drlb1l"><path class="tfei7xb5y"/><path class="kercf2hwi"/><path class="ffk8tub8k"/><path class="z54hldgen"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:evacuate-to-shelter"} {...others} />);
}

export default Component;
