import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b9a7a1b1t.css';
import '../../css/g/gfb_vbuzc.css';
import '../../css/t/t_14bcbiq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="b9a7a1b1t"/><path class="gfb_vbuzc"/><path clip-rule="evenodd" class="t_14bcbiq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:user-remove-subtract-flat"} {...others} />);
}

export default Component;
