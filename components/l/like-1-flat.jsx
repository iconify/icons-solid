import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r-z4z_b6l.css';
import '../../css/d/dfvd5coju.css';
import '../../css/j/j926utbhk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="r-z4z_b6l"/><path clip-rule="evenodd" class="dfvd5coju"/><path clip-rule="evenodd" class="j926utbhk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:like-1-flat"} {...others} />);
}

export default Component;
