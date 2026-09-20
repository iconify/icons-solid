import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvp9oibxa.css';
import '../../css/x/xyjtgccot.css';
import '../../css/j/je3u7hwfu.css';
import '../../css/o/ow3tfjalw.css';
import '../../css/s/s21l2tb5x.css';
import '../../css/b/bc1ztk9_s.css';
import '../../css/z/z-3c0_b1b.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qvp9oibxa"/><g class="xyjtgccot"><path class="je3u7hwfu"/><path class="ow3tfjalw"/><path class="s21l2tb5x"/></g><path class="bc1ztk9_s"/><path class="z-3c0_b1b"/><path class="xrgx2dblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:pin-circle"} {...others} />);
}

export default Component;
