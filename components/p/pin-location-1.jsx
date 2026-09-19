import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/ryc-3sbpf.css';
import '../../css/k/kn3qn_f9z.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="ryc-3sbpf"/><path class="kn3qn_f9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:pin-location-1"} {...others} />);
}

export default Component;
