import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-c_0jb9x.css';
import '../../css/m/mvq0l2g9f.css';
import '../../css/i/i_t2hddxy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="y-c_0jb9x"/><path class="mvq0l2g9f"/><path class="i_t2hddxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:gallery-2-flat"} {...others} />);
}

export default Component;
