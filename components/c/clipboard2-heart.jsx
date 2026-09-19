import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/py_3t3bpr.css';
import '../../css/e/engdqdvya.css';
import '../../css/b/bwf1di5xo.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="py_3t3bpr"/><path class="engdqdvya"/><path class="bwf1di5xo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:clipboard2-heart"} {...others} />);
}

export default Component;
