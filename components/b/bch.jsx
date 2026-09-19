import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u-u4r4bor.css';
import '../../css/o/o7dqa5wfq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="u-u4r4bor"/><path class="o7dqa5wfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:bch"} {...others} />);
}

export default Component;
