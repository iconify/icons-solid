import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az7hstbmu.css';
import '../../css/x/xtagy0bqr.css';
import '../../css/q/q0r50o_-q.css';
import '../../css/o/otit0l4ks.css';
import '../../css/g/g-gmvkahe.css';
import '../../css/a/ask0shbhv.css';
import '../../css/z/zetxacc0n.css';
import '../../css/f/fodwoxbkg.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="az7hstbmu"/><path class="xtagy0bqr"/><path class="q0r50o_-q"/><circle class="otit0l4ks"/><ellipse class="g-gmvkahe"/><ellipse class="ask0shbhv"/><path class="zetxacc0n"/><path class="fodwoxbkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:grinning-face-with-big-eyes"} {...others} />);
}

export default Component;
