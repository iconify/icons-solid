import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y4vfl7pbh.css';
import '../../css/b/b53ts9b6i.css';
import '../../css/r/rwsx2ebqs.css';
import '../../css/t/tw64mgjcg.css';
import '../../css/t/t4c_f4bmv.css';
import '../../css/k/k96n1u14j.css';
import '../../css/e/ex6-m6bxq.css';
import '../../css/f/fyv9c2frp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="y4vfl7pbh"/><g class="b53ts9b6i"><path class="rwsx2ebqs"/><path class="tw64mgjcg"/><path class="t4c_f4bmv"/><path class="k96n1u14j"/><path class="ex6-m6bxq"/><path class="fyv9c2frp"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ela"} {...others} />);
}

export default Component;
