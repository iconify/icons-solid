import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4j9d5egh.css';
import '../../css/a/ayazt6dkk.css';
import '../../css/c/cflfwrb-w.css';
import '../../css/q/qm5g6cbpo.css';
import '../../css/f/f3ls9ubvr.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/f-_mg1_9r.css';
import '../../css/p/pl055vxdw.css';
import '../../css/u/ubivvsbxo.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e4j9d5egh"/><path class="ayazt6dkk"/><path class="cflfwrb-w"/><path class="qm5g6cbpo"/><path class="f3ls9ubvr"/><g class="jn8qy4bru"><path class="f-_mg1_9r"/><path class="pl055vxdw"/><path class="ubivvsbxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:tropical-fish"} {...others} />);
}

export default Component;
