import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az7hstbmu.css';
import '../../css/x/xtagy0bqr.css';
import '../../css/q/q0r50o_-q.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/m/m1xm7gbsr.css';
import '../../css/q/qmnpc1bre.css';
import '../../css/j/jdngjseyp.css';
import '../../css/s/so602gbia.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="az7hstbmu"/><path class="xtagy0bqr"/><path class="q0r50o_-q"/><g class="jn8qy4bru"><path class="m1xm7gbsr"/><circle class="qmnpc1bre"/><path class="jdngjseyp"/><path class="so602gbia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:grinning-squinting-face"} {...others} />);
}

export default Component;
