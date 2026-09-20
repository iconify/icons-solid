import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q30zo4rag.css';
import '../../css/w/wtlghdcov.css';
import '../../css/a/ahdo3xngo.css';
import '../../css/s/s-r_-xbnq.css';
import '../../css/c/c5t8o7qtm.css';
import '../../css/h/h-wy2nbra.css';
import '../../css/s/sjdq85bsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q30zo4rag"/><path class="wtlghdcov"/><path class="ahdo3xngo"/><path class="s-r_-xbnq"/><path class="c5t8o7qtm"/><path class="h-wy2nbra"/><path class="sjdq85bsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:cash-payment-bill"} {...others} />);
}

export default Component;
