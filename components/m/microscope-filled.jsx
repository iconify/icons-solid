import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pc8b7jb1x.css';
import '../../css/j/jkqdz_yog.css';
import '../../css/x/xnsh14cen.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pc8b7jb1x"/><path class="jkqdz_yog"/><path class="xnsh14cen"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:microscope-filled"} {...others} />);
}

export default Component;
