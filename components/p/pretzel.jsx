import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/agzsdlk7k.css';
import '../../css/f/f0_j2wb_h.css';
import '../../css/y/y799fpbvk.css';
import '../../css/l/l1uaqybqx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="agzsdlk7k"/><path class="f0_j2wb_h"/><path class="y799fpbvk"/><path clip-rule="evenodd" class="l1uaqybqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pretzel"} {...others} />);
}

export default Component;
