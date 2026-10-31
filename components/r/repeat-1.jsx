import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sxi_gkbqz.css';
import '../../css/c/cbn9znbrm.css';
import '../../css/d/djyq5teks.css';
import '../../css/c/cetitacaf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="sxi_gkbqz wm-k"/><path class="cbn9znbrm wm-a"/><path class="djyq5teks wm-s"/><path class="cetitacaf wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:repeat-1"} {...others} />);
}

export default Component;
