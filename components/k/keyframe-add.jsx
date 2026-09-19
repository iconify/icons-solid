import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s80_vrbhr.css';
import '../../css/z/z4_5qr45k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="s80_vrbhr"/><path class="z4_5qr45k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:keyframe-add"} {...others} />);
}

export default Component;
