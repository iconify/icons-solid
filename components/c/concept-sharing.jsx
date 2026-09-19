import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/j/jc_vate9a.css';
import '../../css/p/p513bqb2e.css';
import '../../css/t/t1b4irbua.css';
import '../../css/k/kb23qtbvf.css';
import '../../css/o/odk2_9_dl.css';
import '../../css/z/zy8akreoa.css';
import '../../css/y/yuqbx7dnx.css';
import '../../css/t/t5nb2xo6g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="jc_vate9a"/><path clip-rule="evenodd" class="p513bqb2e"/><path class="t1b4irbua"/><path class="kb23qtbvf"/><path class="odk2_9_dl"/><path class="zy8akreoa"/><path class="yuqbx7dnx"/><path class="t5nb2xo6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:concept-sharing"} {...others} />);
}

export default Component;
