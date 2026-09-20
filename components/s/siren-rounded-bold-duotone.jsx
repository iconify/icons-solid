import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cqm0sq4fu.css';
import '../../css/b/bwyejukxj.css';
import '../../css/v/vp3zzxb6y.css';
import '../../css/e/etct30bmr.css';
import '../../css/u/u4dvewbdn.css';
import '../../css/n/n8qbuufsn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cqm0sq4fu"/><path class="bwyejukxj"/><path class="vp3zzxb6y"/><path class="etct30bmr"/><path class="u4dvewbdn"/><path class="n8qbuufsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:siren-rounded-bold-duotone"} {...others} />);
}

export default Component;
