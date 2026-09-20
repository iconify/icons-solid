import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/h/huuovebuu.css';
import '../../css/v/v8baehb7c.css';
import '../../css/p/ph1a1yo8r.css';
import '../../css/f/fwxxaopxd.css';
import '../../css/t/t33dovbih.css';
import '../../css/k/k99wp7_lh.css';
import '../../css/x/xlm7atbzf.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVG1vzkme3q"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="huuovebuu"/><path class="v8baehb7c"/><path class="ph1a1yo8r"/><path class="fwxxaopxd"/><path class="t33dovbih"/><path class="k99wp7_lh"/><path class="xlm7atbzf"/></g></mask></defs><circle mask="url(#SVG1vzkme3q)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:persons-circle-filled"} {...others} />);
}

export default Component;
