import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g6our7bmb.css';
import '../../css/f/fnsdwnhth.css';
import '../../css/j/jz1arcf9v.css';
import '../../css/x/xis9x6bbh.css';
import '../../css/w/wu1rkobuz.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g6our7bmb"/><path class="fnsdwnhth"/><path class="jz1arcf9v"/><path class="xis9x6bbh"/><path class="wu1rkobuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:speaker"} {...others} />);
}

export default Component;
