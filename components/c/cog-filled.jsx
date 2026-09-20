import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/es6gsb.css';
import '../../css/b/bqutxz.css';
import '../../css/y/ydovum.css';
import '../../css/p/prvkak.css';
import '../../css/h/hei83p.css';
import '../../css/v/v5gemm.css';
import '../../css/i/iyp6bw.css';
import '../../css/n/nxuu_a.css';
import '../../css/s/so-from-34.css';
import '../../css/f/fade-to-0.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-xnu3zq.css';
import '../../css/d/d-4jha9r.css';
import '../../css/d/d-c-j2zw.css';
import '../../css/d/d-wr6sul.css';
import '../../css/d/d-248j2i.css';
import '../../css/d/d-voy_sq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="es6gsb"/><path class="bqutxz ydovum"/><path class="prvkak ydovum"/><path class="hei83p ydovum"/><path class="v5gemm ydovum"/><path class="iyp6bw ydovum"/><path class="nxuu_a ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:cog-filled"} {...others} />);
}

export default Component;
