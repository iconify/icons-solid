import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p74aevbjk.css';
import '../../css/i/iviarcrrc.css';
import '../../css/k/k0f1ikx3w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p74aevbjk"/><rect class="iviarcrrc"/><path class="k0f1ikx3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:2fa"} {...others} />);
}

export default Component;
