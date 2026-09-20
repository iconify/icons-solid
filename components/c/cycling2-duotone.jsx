import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x_gvibbaj.css';
import '../../css/o/o6p246bcx.css';
import '../../css/n/nvhzykbnd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="x_gvibbaj"/><path clip-rule="evenodd" class="o6p246bcx"/><path clip-rule="evenodd" class="nvhzykbnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cycling2-duotone"} {...others} />);
}

export default Component;
