import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lp6c5-bkw.css';
import '../../css/i/iibccoean.css';
import '../../css/m/m67yjibpc.css';
import '../../css/a/akw2o6b4n.css';
import '../../css/l/l0r13fl4r.css';
import '../../css/l/lizumz-pr.css';
import '../../css/t/tuyah0tvm.css';
import '../../css/d/d7v2y1neo.css';
import '../../css/r/rzcb49bbj.css';
import '../../css/a/a_3nr6b5v.css';
import '../../css/u/u16wxhvrs.css';
import '../../css/d/d361h4tbm.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="lp6c5-bkw"/><path class="iibccoean"/><path class="m67yjibpc"/><path class="akw2o6b4n"/><path class="l0r13fl4r"/><path class="lizumz-pr"/><path class="tuyah0tvm"/><path class="d7v2y1neo"/><path class="rzcb49bbj"/><path class="a_3nr6b5v"/><path class="u16wxhvrs"/><path class="d361h4tbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:woman-frowning-light"} {...others} />);
}

export default Component;
