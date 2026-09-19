import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xo2h4kz3i.css';
import '../../css/a/adtlylf5k.css';
import '../../css/x/x489igpny.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="xo2h4kz3i"/><path clip-rule="evenodd" class="adtlylf5k"/><path class="x489igpny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:smartphone2-print"} {...others} />);
}

export default Component;
