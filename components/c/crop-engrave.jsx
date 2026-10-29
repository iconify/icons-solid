import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jxzikob-p.css';
import '../../css/n/nup2x6b3k.css';
import '../../css/k/k8e5r6sft.css';
import '../../css/b/b5bfvoblb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jxzikob-p"/><path class="nup2x6b3k wm-shadow"/><path class="k8e5r6sft"/><path class="b5bfvoblb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:crop-engrave"} {...others} />);
}

export default Component;
