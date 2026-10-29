import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tm4gzzgqh.css';
import '../../css/b/bbdvx11fu.css';
import '../../css/c/cdn7lcb3n.css';
import '../../css/b/b1d8a7blo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="tm4gzzgqh wm-shine"/><path class="bbdvx11fu wm-k"/><path class="cdn7lcb3n wm-k"/><path class="b1d8a7blo wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:glasses-sketch"} {...others} />);
}

export default Component;
