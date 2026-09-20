import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zak3j7beo.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/n/njqtqdg9b.css';
import '../../css/r/r93f8fbpk.css';
import '../../css/q/q2jprstzv.css';
import '../../css/a/ae7waxbpd.css';
import '../../css/t/tqev25b8a.css';
import '../../css/i/i67ogkbup.css';
import '../../css/e/eu7e6bbel.css';
import '../../css/k/kb4rr-pjg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zak3j7beo"/><g class="mc2zb0bvp"><path class="njqtqdg9b"/><path class="r93f8fbpk"/><path class="q2jprstzv"/><path class="ae7waxbpd"/><path class="tqev25b8a"/><path class="i67ogkbup"/><path class="eu7e6bbel"/><path class="kb4rr-pjg"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-shine-bold-duotone"} {...others} />);
}

export default Component;
