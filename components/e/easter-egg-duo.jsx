import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thjuvbz3w.css';
import '../../css/c/c5p-m7byx.css';
import '../../css/o/obbn_ibfg.css';
import '../../css/s/ssh8gtb2h.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="thjuvbz3w"><path class="c5p-m7byx"/><path class="obbn_ibfg"/><path class="ssh8gtb2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:easter-egg-duo"} {...others} />);
}

export default Component;
