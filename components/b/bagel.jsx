import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/idnom4b3s.css';
import '../../css/j/jto8zscfm.css';
import '../../css/z/zdlr2et8c.css';
import '../../css/k/k724wmbkt.css';
import '../../css/c/cjphfqblu.css';
import '../../css/f/fqq0hubgc.css';
import '../../css/y/yl0shbbtt.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="idnom4b3s"/><path class="jto8zscfm"/><path class="zdlr2et8c"/><path class="k724wmbkt"/><path class="cjphfqblu"/><path class="fqq0hubgc"/><path class="yl0shbbtt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:bagel"} {...others} />);
}

export default Component;
