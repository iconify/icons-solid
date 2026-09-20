import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p98tnc2uy.css';
import '../../css/m/myyi8vngx.css';
import '../../css/o/ov3z5ybhm.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/g/gf76gdbwh.css';
import '../../css/w/wkwymhb-o.css';
import '../../css/h/hhdhrc96d.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="p98tnc2uy"/><path class="myyi8vngx"/><path class="ov3z5ybhm"/><g class="jn8qy4bru"><path class="gf76gdbwh"/><path class="wkwymhb-o"/><path class="hhdhrc96d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:headphone"} {...others} />);
}

export default Component;
