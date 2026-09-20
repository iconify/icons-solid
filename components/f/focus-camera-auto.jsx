import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h2-lb95-v.css';
import '../../css/w/wsu7p3r8t.css';
import '../../css/r/r08zu2b2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="h2-lb95-v"/><path class="wsu7p3r8t"/><path class="r08zu2b2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:focus-camera-auto"} {...others} />);
}

export default Component;
