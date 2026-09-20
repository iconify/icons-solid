import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ihi5mdelv.css';
import '../../css/i/iva9usw6m.css';
import '../../css/v/v1mxnhbir.css';
import '../../css/t/t0v0bebny.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ihi5mdelv"/><path class="iva9usw6m"/><path class="v1mxnhbir"/><path class="t0v0bebny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-cross-bold-duotone"} {...others} />);
}

export default Component;
