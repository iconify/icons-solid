import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hl-d-3b1i.css';
import '../../css/b/bxkjife0a.css';
import '../../css/u/udssjob0f.css';
import '../../css/v/vdve15bqe.css';
import '../../css/n/nr7t1tjcm.css';
import '../../css/o/oys503b6y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="hl-d-3b1i"/><path class="bxkjife0a"/><path class="udssjob0f"/><path class="vdve15bqe"/><path class="nr7t1tjcm"/><path class="oys503b6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:drone-charge-half"} {...others} />);
}

export default Component;
