import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpprrl-oc.css';
import '../../css/j/jtvf014yy.css';
import '../../css/t/tuwlzzbuq.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/a/anumt-d7o.css';
import '../../css/f/fh24wh2_x.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="cpprrl-oc"/><path class="jtvf014yy"/><circle class="tuwlzzbuq"/><g class="brzn_0bpr"><circle class="anumt-d7o"/><path class="fh24wh2_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hair-pick"} {...others} />);
}

export default Component;
