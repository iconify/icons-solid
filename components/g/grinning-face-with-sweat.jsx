import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6iikjgcv.css';
import '../../css/o/o7c4lrs7b.css';
import '../../css/x/xtagy0bqr.css';
import '../../css/q/q0r50o_-q.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/o/o31c_4b6y.css';
import '../../css/u/uugvh-enu.css';
import '../../css/u/uyr504zha.css';
import '../../css/q/q0ivphbgc.css';
import '../../css/q/qtmh9-bzf.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="s6iikjgcv"/><path class="o7c4lrs7b"/><path class="xtagy0bqr"/><path class="q0r50o_-q"/><g class="brzn_0bpr"><path class="o31c_4b6y"/><path class="uugvh-enu"/><path class="uyr504zha"/><path class="q0ivphbgc"/><path class="qtmh9-bzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:grinning-face-with-sweat"} {...others} />);
}

export default Component;
