import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ivpe60tpf.css';
import '../../css/z/zw1bb7g1p.css';
import '../../css/x/x0xf80pjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ivpe60tpf"/><path class="zw1bb7g1p"/><path class="x0xf80pjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud-off"} {...others} />);
}

export default Component;
