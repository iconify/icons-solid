import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tr8hrmpkp.css';
import '../../css/w/wq26f1b_k.css';
import '../../css/f/f1hncobhb.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tr8hrmpkp"/><path clip-rule="evenodd" class="wq26f1b_k"/><path clip-rule="evenodd" class="f1hncobhb"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:peso-off"} {...others} />);
}

export default Component;
