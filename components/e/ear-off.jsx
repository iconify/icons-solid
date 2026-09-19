import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cip_fwbtt.css';
import '../../css/f/fj36-4bau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cip_fwbtt"/><path class="fj36-4bau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ear-off"} {...others} />);
}

export default Component;
