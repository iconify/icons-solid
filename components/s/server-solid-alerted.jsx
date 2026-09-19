import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/krgv52bvo.css';
import '../../css/i/it0_k2res.css';
import '../../css/j/jytmtkbfu.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-solid--alerted clr-i-solid-path-1--alerted krgv52bvo"/><circle class="clr-i-solid--alerted clr-i-solid-path-2--alerted it0_k2res"/><path class="clr-i-alert clr-i-solid--alerted clr-i-solid-path-3--alerted jytmtkbfu"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:server-solid-alerted"} {...others} />);
}

export default Component;
