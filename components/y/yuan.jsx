import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/v/v6_hkbbrx.css';
import '../../css/d/dk84jbakp.css';
import '../../css/f/fez_u5bpc.css';
import '../../css/s/sg3z6rc4j.css';
import '../../css/d/dhgwwr1yb.css';
import '../../css/l/lazoeb1xt.css';
import '../../css/j/j987dacbq.css';
import '../../css/k/k10idobrs.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="xyjtgccot"><path class="v6_hkbbrx"/><path class="dk84jbakp"/><path class="fez_u5bpc"/><path class="sg3z6rc4j"/></g><path class="dhgwwr1yb"/><path class="lazoeb1xt"/><path class="j987dacbq"/><path class="k10idobrs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:yuan"} {...others} />);
}

export default Component;
