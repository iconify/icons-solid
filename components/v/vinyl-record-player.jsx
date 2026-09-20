import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ih6tv-bnd.css';
import '../../css/p/pc1wkcb7o.css';
import '../../css/z/z1k4a8z-v.css';
import '../../css/w/w4_dk0bsq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ih6tv-bnd"/><path class="pc1wkcb7o"/><path class="z1k4a8z-v"/><path class="w4_dk0bsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:vinyl-record-player"} {...others} />);
}

export default Component;
