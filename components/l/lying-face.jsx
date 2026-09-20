import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4u8pbwjc.css';
import '../../css/w/w2zhnybnk.css';
import '../../css/a/a9u9cvm6j.css';
import '../../css/d/d79gy2v4r.css';
import '../../css/u/u2srbijvg.css';
import '../../css/t/tdhzq11dq.css';
import '../../css/e/eyqn6lbob.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="x4u8pbwjc"><path class="w2zhnybnk"/><path class="a9u9cvm6j"/></g><path class="d79gy2v4r"/><path class="u2srbijvg"/><path class="tdhzq11dq"/><path class="eyqn6lbob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:lying-face"} {...others} />);
}

export default Component;
