import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmo9ppb1i.css';
import '../../css/r/r19r0vb2u.css';
import '../../css/c/c49qcjbkt.css';
import '../../css/r/r0le27b_q.css';
import '../../css/l/lgc6s8ueu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="lmo9ppb1i"><path class="r19r0vb2u"/><path class="c49qcjbkt"/><path class="r0le27b_q"/><path class="lgc6s8ueu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:medical-instrument-walking-aid"} {...others} />);
}

export default Component;
