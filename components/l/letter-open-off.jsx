import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gvgx048pg.css';
import '../../css/q/qr5fk4bxt.css';
import '../../css/b/br94sx3cn.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gvgx048pg"/><path clip-rule="evenodd" class="qr5fk4bxt"/><path clip-rule="evenodd" class="br94sx3cn"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:letter-open-off"} {...others} />);
}

export default Component;
