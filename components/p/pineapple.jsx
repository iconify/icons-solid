import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fj4wj9bms.css';
import '../../css/p/pngysdb2w.css';
import '../../css/o/oaoxsbbaw.css';
import '../../css/e/ebponx3_q.css';
import '../../css/h/hvd3e-b4v.css';
import '../../css/l/lb80qlbob.css';
import '../../css/z/zjyzj1i8w.css';
import '../../css/w/whe-4hv9t.css';
import '../../css/e/e5xz79ugq.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="fj4wj9bms"><path class="pngysdb2w"/><path class="oaoxsbbaw"/><path class="ebponx3_q"/><path class="hvd3e-b4v"/></g><g class="lb80qlbob"><path class="zjyzj1i8w"/><path class="whe-4hv9t"/><path class="e5xz79ugq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:pineapple"} {...others} />);
}

export default Component;
