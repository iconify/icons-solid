import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cra2abc4o.css';
import '../../css/c/cmem7pb-p.css';
import '../../css/e/eo_a9mqog.css';
import '../../css/z/z1ymtzbpk.css';
import '../../css/z/zgozv61oq.css';

const viewBox = {"width":1201.4,"height":324.47};
const content = `<path class="cra2abc4o"/><path class="cmem7pb-p"/><path class="eo_a9mqog"/><path class="z1ymtzbpk"/><path class="zgozv61oq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tintas-vital"} {...others} />);
}

export default Component;
