import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y8lc41ufp.css';
import '../../css/s/so_zjfb6p.css';
import '../../css/q/q98uypm1w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="y8lc41ufp"/><path clip-rule="evenodd" class="so_zjfb6p"/><path clip-rule="evenodd" class="q98uypm1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:hard-drive-2-flat"} {...others} />);
}

export default Component;
