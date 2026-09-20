import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/im3uwlbyi.css';
import '../../css/s/s9nk4bcpf.css';
import '../../css/v/vxuvzlqhl.css';
import '../../css/z/zfmni8bjj.css';
import '../../css/f/fn9gabbdu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="im3uwlbyi"/><path class="s9nk4bcpf"/><path class="vxuvzlqhl"/><path class="zfmni8bjj"/><path class="fn9gabbdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:drone"} {...others} />);
}

export default Component;
