import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vvcip01ow.css';
import '../../css/r/rwo88xq5a.css';
import '../../css/l/l6ukflrbe.css';
import '../../css/o/okx1y-7kr.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vvcip01ow"/><path clip-rule="evenodd" class="rwo88xq5a"/><path clip-rule="evenodd" class="l6ukflrbe"/><path clip-rule="evenodd" class="okx1y-7kr"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:people-off"} {...others} />);
}

export default Component;
