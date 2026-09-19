import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/az8-38qqs.css';
import '../../css/c/c91ozbctr.css';
import '../../css/b/bh_qopb5p.css';
import '../../css/u/us-x21b2b.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><rect class="az8-38qqs"/><rect class="c91ozbctr"/><rect class="bh_qopb5p"/><path class="us-x21b2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:organisation"} {...others} />);
}

export default Component;
