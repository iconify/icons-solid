import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rz7j_zb9j.css';
import '../../css/k/k6lxs-9zx.css';
import '../../css/u/uvpw34b8e.css';
import '../../css/a/aet6weaep.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="rz7j_zb9j"/><path clip-rule="evenodd" class="k6lxs-9zx"/><path clip-rule="evenodd" class="uvpw34b8e"/><path clip-rule="evenodd" class="aet6weaep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:graduation-cap-flat"} {...others} />);
}

export default Component;
