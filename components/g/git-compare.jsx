import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cer1l52ql.css';
import '../../css/u/uo75ay2_p.css';
import '../../css/e/e121x_bjn.css';
import '../../css/a/afkyzacao.css';
import '../../css/e/ermnodbhs.css';
import '../../css/n/naf14q_ah.css';
import '../../css/v/v-6-2s0yg.css';
import '../../css/k/k8gnrmb3g.css';
import '../../css/e/e54d1db9l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cer1l52ql wm-shadow"/><path class="uo75ay2_p wm-k"/><path class="e121x_bjn wm-k"/><path class="afkyzacao wm-k"/><path class="ermnodbhs wm-k"/><path class="naf14q_ah wm-k"/><path class="v-6-2s0yg wm-shine"/><path class="k8gnrmb3g wm-a"/><path class="e54d1db9l wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:git-compare"} {...others} />);
}

export default Component;
