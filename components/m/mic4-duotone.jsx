import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w_bo51blv.css';
import '../../css/e/ev28lhkcq.css';
import '../../css/v/vxxv0vbbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w_bo51blv"/><path class="ev28lhkcq"/><path clip-rule="evenodd" class="vxxv0vbbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:mic4-duotone"} {...others} />);
}

export default Component;
