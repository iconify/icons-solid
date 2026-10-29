import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r76qbi3sf.css';
import '../../css/m/mfyqqqb4c.css';
import '../../css/n/n_30woblz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="r76qbi3sf"/><path class="mfyqqqb4c wm-k"/><path class="n_30woblz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tag-sketch"} {...others} />);
}

export default Component;
