import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c0vjz3bdl.css';
import '../../css/q/qzr3vv_na.css';
import '../../css/t/t1128_esl.css';

const viewBox = {"width":64,"height":64};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGpc8vm3TC)"><path class="c0vjz3bdl"/><path class="qzr3vv_na"/></g><defs><clipPath id="SVGpc8vm3TC"><path class="t1128_esl"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:composio"} {...others} />);
}

export default Component;
