import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l2i19ebtr.css';
import '../../css/z/zozzacc7y.css';
import '../../css/m/m7210b4xt.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="l2i19ebtr"/><path class="zozzacc7y"/><path clip-rule="evenodd" class="m7210b4xt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:signage-4-flat"} {...others} />);
}

export default Component;
