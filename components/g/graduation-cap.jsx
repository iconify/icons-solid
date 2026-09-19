import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvkc79bpm.css';
import '../../css/x/x37kokw5r.css';
import '../../css/u/u8i5jabla.css';
import '../../css/t/tdi87sbpd.css';
import '../../css/s/segiswblx.css';
import '../../css/x/x14m0f3ei.css';
import '../../css/i/ior89nbtm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="bvkc79bpm"><path class="x37kokw5r"/><ellipse class="u8i5jabla"/></g><path class="tdi87sbpd"/><g class="bvkc79bpm"><path class="segiswblx"/><circle class="x14m0f3ei"/><path class="ior89nbtm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:graduation-cap"} {...others} />);
}

export default Component;
