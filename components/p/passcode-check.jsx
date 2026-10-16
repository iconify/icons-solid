import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s06stoqvb.css';
import '../../css/a/a4mzgpb9x.css';
import '../../css/q/q0dugcn8n.css';
import '../../css/i/iiwbi_z5o.css';
import '../../css/k/k25m69jau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s06stoqvb"/><path class="a4mzgpb9x"/><path class="q0dugcn8n"/><path class="iiwbi_z5o"/><path class="k25m69jau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:passcode-check"} {...others} />);
}

export default Component;
