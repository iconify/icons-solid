import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t37cpkbel.css';
import '../../css/w/w17eqfq2x.css';
import '../../css/i/i6q2iqb1d.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="t37cpkbel"/><path class="w17eqfq2x"/><path class="i6q2iqb1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ubq"} {...others} />);
}

export default Component;
