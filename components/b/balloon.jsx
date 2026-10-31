import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g730-hann.css';
import '../../css/i/imtigfbsi.css';
import '../../css/y/yie5yccdo.css';
import '../../css/b/ber42vkvg.css';
import '../../css/g/g7uezpbub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="g730-hann wm-shadow"/><path class="imtigfbsi"/><path class="yie5yccdo"/><path class="ber42vkvg"/><path class="g7uezpbub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:balloon"} {...others} />);
}

export default Component;
