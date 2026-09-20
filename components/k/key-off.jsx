import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y5utmh9wq.css';
import '../../css/y/y6fz92bxe.css';
import '../../css/a/a3-4ixr3v.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="y5utmh9wq"/><path clip-rule="evenodd" class="y6fz92bxe"/><path clip-rule="evenodd" class="a3-4ixr3v"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:key-off"} {...others} />);
}

export default Component;
