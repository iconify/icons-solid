import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xn4aaqbkb.css';
import '../../css/e/eyjrvqbsq.css';
import '../../css/z/zs55ho22r.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="xn4aaqbkb"/><path class="eyjrvqbsq"/><path class="zs55ho22r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:camera-reels-fill"} {...others} />);
}

export default Component;
