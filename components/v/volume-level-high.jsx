import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k9m1wmbsy.css';
import '../../css/i/ix9obvbmn.css';
import '../../css/n/ngqx55bct.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="k9m1wmbsy"/><path class="ix9obvbmn"/><path class="ngqx55bct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:volume-level-high"} {...others} />);
}

export default Component;
