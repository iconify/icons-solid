import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j8id28b1z.css';
import '../../css/t/t4nxfkb0u.css';
import '../../css/c/clwp_yyfv.css';
import '../../css/k/kn11871wp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="j8id28b1z"/><path class="t4nxfkb0u"/><path clip-rule="evenodd" class="clwp_yyfv"/><path clip-rule="evenodd" class="kn11871wp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:task-list-edit-flat"} {...others} />);
}

export default Component;
