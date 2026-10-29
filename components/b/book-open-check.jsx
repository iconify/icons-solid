import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yo1pqbbca.css';
import '../../css/y/ytlnm8bjp.css';
import '../../css/k/kaup_f9cl.css';
import '../../css/e/ezyfh32kp.css';
import '../../css/k/kc08rvemt.css';
import '../../css/t/tjzxkcrpv.css';
import '../../css/w/w3b-l_b-f.css';
import '../../css/b/brq6jrilo.css';
import '../../css/m/mzs1hyb1c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow yo1pqbbca"/><path class="wm-k ytlnm8bjp"/><path class="kaup_f9cl wm-k"/><path class="ezyfh32kp wm-k"/><path class="kc08rvemt wm-k"/><path class="tjzxkcrpv wm-k"/><path class="w3b-l_b-f wm-shine"/><path class="brq6jrilo wm-k"/><path class="mzs1hyb1c wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:book-open-check"} {...others} />);
}

export default Component;
