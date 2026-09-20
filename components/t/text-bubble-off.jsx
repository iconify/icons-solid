import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/slegk3slk.css';
import '../../css/s/s02d0qbow.css';
import '../../css/p/pcpc27ofz.css';
import '../../css/n/ngds8nbum.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="slegk3slk"/><circle class="s02d0qbow"/><circle class="pcpc27ofz"/><circle class="ngds8nbum"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:text-bubble-off"} {...others} />);
}

export default Component;
