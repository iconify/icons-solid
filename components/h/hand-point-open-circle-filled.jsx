import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/h/hxc6tmb0e.css';
import '../../css/a/aj0-n1bxl.css';
import '../../css/g/grm8oqpoo.css';
import '../../css/m/mq_7rmb8w.css';
import '../../css/n/np4g1kbug.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGWCphOeas"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="hxc6tmb0e"/><path class="aj0-n1bxl"/><path class="grm8oqpoo"/><path class="mq_7rmb8w"/><path class="np4g1kbug"/></g></mask></defs><circle mask="url(#SVGWCphOeas)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:hand-point-open-circle-filled"} {...others} />);
}

export default Component;
