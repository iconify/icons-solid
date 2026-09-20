import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sxm22-bpx.css';
import '../../css/u/umiyufmzm.css';
import '../../css/a/amle7cc9s.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="sxm22-bpx"/><path class="umiyufmzm"/><path class="amle7cc9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:browser-hash"} {...others} />);
}

export default Component;
