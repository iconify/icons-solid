import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/slc86ootb.css';
import '../../css/h/hqlqb8bfm.css';
import '../../css/b/bou945bat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="slc86ootb"/><path class="hqlqb8bfm wm-a"/><path class="bou945bat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:trees-duo"} {...others} />);
}

export default Component;
