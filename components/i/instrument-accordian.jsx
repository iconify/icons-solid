import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fp_zpjb1t.css';
import '../../css/v/vjkfxtbal.css';
import '../../css/c/cun0_vbmg.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fp_zpjb1t"/><path class="vjkfxtbal"/><path class="cun0_vbmg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:instrument-accordian"} {...others} />);
}

export default Component;
