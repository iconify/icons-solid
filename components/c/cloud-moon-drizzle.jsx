import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ejrfq-ozy.css';
import '../../css/p/ptlx-7deu.css';
import '../../css/g/gv_676lrl.css';
import '../../css/m/mb4ccfbkg.css';
import '../../css/w/wt5ldl62z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ejrfq-ozy"/><path class="ptlx-7deu"/><path class="gv_676lrl"/><path class="mb4ccfbkg"/><path class="wt5ldl62z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud-moon-drizzle"} {...others} />);
}

export default Component;
