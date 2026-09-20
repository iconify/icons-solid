import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eg-5dbc8x.css';
import '../../css/o/o7e_y-m0n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="eg-5dbc8x"/><path clip-rule="evenodd" class="o7e_y-m0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:cloud-off-flat"} {...others} />);
}

export default Component;
