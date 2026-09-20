import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oqc8o1i9f.css';
import '../../css/l/lu22ebasm.css';
import '../../css/k/kjoytpkfo.css';
import '../../css/g/gxybq3bmw.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="oqc8o1i9f"/><path class="lu22ebasm"/><path clip-rule="evenodd" class="kjoytpkfo"/><path clip-rule="evenodd" class="gxybq3bmw"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:photo-off"} {...others} />);
}

export default Component;
