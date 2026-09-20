import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/huuovebuu.css';
import '../../css/v/v8baehb7c.css';
import '../../css/p/ph1a1yo8r.css';
import '../../css/f/fwxxaopxd.css';
import '../../css/t/t33dovbih.css';
import '../../css/k/k99wp7_lh.css';
import '../../css/x/xlm7atbzf.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><g clip-rule="evenodd" class="d2kvgvbvc"><path class="huuovebuu"/><path class="v8baehb7c"/><path class="ph1a1yo8r"/><path class="fwxxaopxd"/><path class="t33dovbih"/><path class="k99wp7_lh"/><path class="xlm7atbzf"/></g><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:persons-circle-filled"} {...others} />);
}

export default Component;
