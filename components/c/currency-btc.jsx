import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/patw3jb9t.css';
import '../../css/l/ls2mujbyi.css';
import '../../css/k/k1tehvb_k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="patw3jb9t"/><path class="ls2mujbyi"/><path class="k1tehvb_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:currency-btc"} {...others} />);
}

export default Component;
