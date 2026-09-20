import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kb4rr-pjg.css';
import '../../css/a/atk3l9b5i.css';
import '../../css/x/xqb5rdbht.css';
import '../../css/l/l77l2in0x.css';
import '../../css/g/g-er__g5u.css';
import '../../css/c/csfq1xb3w.css';
import '../../css/q/q6dnxzr9t.css';
import '../../css/u/uy6wewbxz.css';
import '../../css/n/nlkwaabqc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kb4rr-pjg"/><path clip-rule="evenodd" class="atk3l9b5i"/><path class="xqb5rdbht"/><path class="l77l2in0x"/><path class="g-er__g5u"/><path class="csfq1xb3w"/><path class="q6dnxzr9t"/><path class="uy6wewbxz"/><path class="nlkwaabqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:heart-shine-outline"} {...others} />);
}

export default Component;
