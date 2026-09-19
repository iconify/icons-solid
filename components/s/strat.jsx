import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nalrqgjfd.css';
import '../../css/s/so3k-qbsf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="nalrqgjfd"/><path class="so3k-qbsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:strat"} {...others} />);
}

export default Component;
