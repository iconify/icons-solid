import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1psxwbwe.css';
import '../../css/d/dydls7b1i.css';
import '../../css/j/juns3uvbp.css';
import '../../css/w/wqpq22w0g.css';
import '../../css/c/cc15ccb6e.css';
import '../../css/z/z0ufk0bcm.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/u/u2pxmm3su.css';
import '../../css/e/e1na6vb4l.css';
import '../../css/n/n8iywbcyw.css';
import '../../css/a/a4kem0bqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="a1psxwbwe"/><path class="dydls7b1i"/><path class="juns3uvbp"/><path class="wqpq22w0g"/><path class="cc15ccb6e"/><path class="z0ufk0bcm"/><g class="mc2zb0bvp"><path class="u2pxmm3su"/><path class="e1na6vb4l"/><path class="n8iywbcyw"/><path class="a4kem0bqe"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sunset-bold-duotone"} {...others} />);
}

export default Component;
