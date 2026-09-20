import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bxtniz0hl.css';
import '../../css/x/xcdmjzfnz.css';
import '../../css/m/mnblu6bxo.css';
import '../../css/b/b_f5r9ekh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bxtniz0hl"/><path clip-rule="evenodd" class="xcdmjzfnz"/><path class="mnblu6bxo"/><path class="b_f5r9ekh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:balloon-duotone"} {...others} />);
}

export default Component;
