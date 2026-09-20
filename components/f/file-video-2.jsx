import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fzd-zfwgv.css';
import '../../css/c/cw2an1bpo.css';
import '../../css/s/s_3a86o0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fzd-zfwgv"/><path class="cw2an1bpo"/><rect class="s_3a86o0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-video-2"} {...others} />);
}

export default Component;
