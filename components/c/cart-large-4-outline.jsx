import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zcd39qb3r.css';
import '../../css/b/bv8zrozgd.css';
import '../../css/e/en89jw64i.css';
import '../../css/p/pvdyq3brk.css';
import '../../css/x/x5-t90vnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zcd39qb3r"/><path class="bv8zrozgd"/><path clip-rule="evenodd" class="en89jw64i"/><path clip-rule="evenodd" class="pvdyq3brk"/><path clip-rule="evenodd" class="x5-t90vnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-large-4-outline"} {...others} />);
}

export default Component;
