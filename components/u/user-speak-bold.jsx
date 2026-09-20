import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gb3vtejwz.css';
import '../../css/l/lmfsi8bqv.css';
import '../../css/d/d0l7ov6dg.css';
import '../../css/t/tk78z4b2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gb3vtejwz"/><path class="lmfsi8bqv"/><path class="d0l7ov6dg"/><path class="tk78z4b2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-speak-bold"} {...others} />);
}

export default Component;
