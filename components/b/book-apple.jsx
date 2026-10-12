import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yyce-6bjt.css';
import '../../css/u/u64d1ybla.css';
import '../../css/k/kyu6_gbkf.css';
import '../../css/o/o2dqo6bpf.css';
import '../../css/d/dbv2x3bmn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yyce-6bjt"/><path class="u64d1ybla"/><path class="kyu6_gbkf"/><rect transform="rotate(90 19.75 17.02)" class="o2dqo6bpf"/><path class="dbv2x3bmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:book-apple"} {...others} />);
}

export default Component;
