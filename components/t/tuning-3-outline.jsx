import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5dawvnfq.css';
import '../../css/a/a0ad7z3mi.css';
import '../../css/x/x4pay7bhi.css';
import '../../css/l/lrtzypd8m.css';
import '../../css/c/cmk20--en.css';
import '../../css/j/jujbhzbmh.css';
import '../../css/u/u7z3ff_bc.css';
import '../../css/k/kt4sbrbfu.css';
import '../../css/z/z_4mw2b5l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z5dawvnfq"/><path clip-rule="evenodd" class="a0ad7z3mi"/><path clip-rule="evenodd" class="x4pay7bhi"/><path clip-rule="evenodd" class="lrtzypd8m"/><path class="cmk20--en"/><path class="jujbhzbmh"/><path class="u7z3ff_bc"/><path class="kt4sbrbfu"/><path class="z_4mw2b5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-3-outline"} {...others} />);
}

export default Component;
