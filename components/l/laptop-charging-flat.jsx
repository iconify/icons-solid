import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y89mjdb7n.css';
import '../../css/b/b6e53ac_z.css';
import '../../css/k/kg01y9bkk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="y89mjdb7n"/><path clip-rule="evenodd" class="b6e53ac_z"/><path clip-rule="evenodd" class="kg01y9bkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:laptop-charging-flat"} {...others} />);
}

export default Component;
