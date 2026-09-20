import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z2dg25zkk.css';
import '../../css/h/h5q-b7bfk.css';
import '../../css/c/c8_hbywkl.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z2dg25zkk"/><path class="h5q-b7bfk"/><path clip-rule="evenodd" class="c8_hbywkl"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:face-frowning-circle"} {...others} />);
}

export default Component;
