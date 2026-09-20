import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b-l6dcceu.css';
import '../../css/r/r5jmk_bor.css';
import '../../css/i/i21ar1oaf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="b-l6dcceu"/><path class="r5jmk_bor"/><path class="i21ar1oaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:three-square-filled"} {...others} />);
}

export default Component;
