import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ys-00mb-z.css';
import '../../css/c/c40u_364l.css';
import '../../css/j/jf3977e_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ys-00mb-z"/><path class="c40u_364l"/><path clip-rule="evenodd" class="jf3977e_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:website"} {...others} />);
}

export default Component;
