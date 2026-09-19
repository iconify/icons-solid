import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wrm4btbfp.css';
import '../../css/c/cua4t8b_t.css';
import '../../css/u/usb15cc2i.css';
import '../../css/c/cy8y98b1l.css';
import '../../css/k/k_xqplfzx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="wrm4btbfp"/><path class="cua4t8b_t"/><path class="usb15cc2i"/><path class="cy8y98b1l"/><path class="k_xqplfzx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:chess-one"} {...others} />);
}

export default Component;
