import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojm0lq21j.css';
import '../../css/g/gkkyuf8ge.css';
import '../../css/a/a0swfcb9e.css';
import '../../css/j/jzwtw7bic.css';
import '../../css/o/o0xlg18bn.css';
import '../../css/a/acm0yorlp.css';
import '../../css/g/gj04x5b9p.css';
import '../../css/b/bmvx79b7e.css';
import '../../css/e/ed2w_w5vr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ojm0lq21j wm-shadow"/><path class="gkkyuf8ge wm-k"/><path class="a0swfcb9e wm-k"/><path class="jzwtw7bic wm-k"/><path class="o0xlg18bn wm-k"/><path class="acm0yorlp wm-k"/><path class="gj04x5b9p wm-shine"/><path class="bmvx79b7e wm-a"/><path class="ed2w_w5vr wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:cricket"} {...others} />);
}

export default Component;
