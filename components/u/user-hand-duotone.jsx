import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wo0pu3bhk.css';
import '../../css/i/io57_vhgi.css';
import '../../css/d/dtl23o_xq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wo0pu3bhk"/><path class="io57_vhgi"/><circle class="dtl23o_xq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:user-hand-duotone"} {...others} />);
}

export default Component;
