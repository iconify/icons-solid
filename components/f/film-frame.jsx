import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r0e80dbzz.css';
import '../../css/h/hsac7s50m.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="r0e80dbzz"/><path clip-rule="evenodd" class="hsac7s50m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:film-frame"} {...others} />);
}

export default Component;
