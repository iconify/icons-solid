import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mhdxriite.css';
import '../../css/h/hjiy5kq8c.css';
import '../../css/e/ektp6ob5f.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mhdxriite"/><path clip-rule="evenodd" class="hjiy5kq8c"/><path clip-rule="evenodd" class="ektp6ob5f"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:clock-off"} {...others} />);
}

export default Component;
