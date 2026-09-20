import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kv_hpvbul.css';
import '../../css/c/cv8_uxbtz.css';
import '../../css/t/tznmijrmf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="kv_hpvbul"><path class="cv8_uxbtz"/><path class="tznmijrmf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dreammachine-luma"} {...others} />);
}

export default Component;
