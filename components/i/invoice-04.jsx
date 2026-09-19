import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mb-rctu0w.css';
import '../../css/k/ki-z3s3do.css';
import '../../css/y/y2r41vbeh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mb-rctu0w"/><path class="ki-z3s3do"/><path class="y2r41vbeh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:invoice-04"} {...others} />);
}

export default Component;
