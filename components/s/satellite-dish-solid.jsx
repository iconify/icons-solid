import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jcair3ftq.css';
import '../../css/p/pz-3q4shj.css';
import '../../css/z/ze1c0kkes.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="jcair3ftq"/><path class="pz-3q4shj wm-a"/><path class="wm-s ze1c0kkes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:satellite-dish-solid"} {...others} />);
}

export default Component;
