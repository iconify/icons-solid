import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b92hqpwor.css';
import '../../css/i/iibccoean.css';
import '../../css/r/r6enoe8vq.css';
import '../../css/h/hudhpwb6s.css';
import '../../css/g/g6goxgbtj.css';
import '../../css/l/lizumz-pr.css';
import '../../css/t/tuyah0tvm.css';
import '../../css/d/d7v2y1neo.css';
import '../../css/r/rzcb49bbj.css';
import '../../css/a/a_3nr6b5v.css';
import '../../css/u/u16wxhvrs.css';
import '../../css/r/r62eufy2l.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="b92hqpwor"/><path class="iibccoean"/><path class="r6enoe8vq"/><path class="hudhpwb6s"/><path class="g6goxgbtj"/><path class="lizumz-pr"/><path class="tuyah0tvm"/><path class="d7v2y1neo"/><path class="rzcb49bbj"/><path class="a_3nr6b5v"/><path class="u16wxhvrs"/><path class="r62eufy2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:woman-frowning-medium-light"} {...others} />);
}

export default Component;
