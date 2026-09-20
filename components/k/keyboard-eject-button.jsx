import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nj_05b83q.css';
import '../../css/r/raoql9qnh.css';
import '../../css/t/tuq51rxgh.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nj_05b83q"/><path class="raoql9qnh"/><path class="tuq51rxgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:keyboard-eject-button"} {...others} />);
}

export default Component;
