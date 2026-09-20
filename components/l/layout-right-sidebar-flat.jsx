import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itarbfbur.css';
import '../../css/i/iqub7raeq.css';
import '../../css/p/pjnrrepbz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="itarbfbur"/><path class="iqub7raeq"/><path clip-rule="evenodd" class="pjnrrepbz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:layout-right-sidebar-flat"} {...others} />);
}

export default Component;
