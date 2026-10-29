import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/unez3en8j.css';
import '../../css/n/nvv_c9j-h.css';
import '../../css/a/anw3ijuct.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="unez3en8j"/><path class="nvv_c9j-h wm-shadow"/><path class="anw3ijuct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lamp-engrave"} {...others} />);
}

export default Component;
