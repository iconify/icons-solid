import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/umzkv9zji.css';
import '../../css/c/c__ccjdqj.css';
import '../../css/p/pkqaggb0i.css';
import '../../css/g/gjn9iyg8t.css';
import '../../css/k/kkrt7ac2d.css';
import '../../css/p/pnl-8acai.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="umzkv9zji"/><path class="c__ccjdqj"/><path class="pkqaggb0i"/><rect class="gjn9iyg8t"/><rect class="kkrt7ac2d"/><path class="pnl-8acai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hand-receiving-box"} {...others} />);
}

export default Component;
