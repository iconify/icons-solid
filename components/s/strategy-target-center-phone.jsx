import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/njwn1253p.css';
import '../../css/h/hf9tjnbsc.css';
import '../../css/k/k32r8bben.css';
import '../../css/r/r8qe7bldu.css';
import '../../css/z/z7_50-buj.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="njwn1253p"/><path class="hf9tjnbsc"/><path class="k32r8bben"/><path class="r8qe7bldu"/><path class="z7_50-buj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:strategy-target-center-phone"} {...others} />);
}

export default Component;
