import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q24_9dbcg.css';
import '../../css/m/mw9pchp5k.css';
import '../../css/e/e-j42-uyq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="q24_9dbcg"/><path class="mw9pchp5k"/><path class="e-j42-uyq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:rotate-lock"} {...others} />);
}

export default Component;
