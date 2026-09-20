import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bpae-ya9o.css';
import '../../css/v/vej5g0iqa.css';
import '../../css/p/pyw7pdc_n.css';
import '../../css/i/i38skvbho.css';
import '../../css/o/o_av1eu7g.css';
import '../../css/x/x0xe5uk_a.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="bpae-ya9o"/><path class="vej5g0iqa"/><path class="pyw7pdc_n"/><path class="i38skvbho"/><path class="o_av1eu7g"/><path class="x0xe5uk_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:toaster"} {...others} />);
}

export default Component;
