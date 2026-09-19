import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuqht7spy.css';
import '../../css/u/ufjnasr5o.css';
import '../../css/w/wzgk5vbjr.css';
import '../../css/a/agys1im8u.css';
import '../../css/i/ium_54bmq.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline--badged clr-i-outline-path-1--badged cuqht7spy"/><ellipse class="clr-i-outline--badged clr-i-outline-path-2--badged ufjnasr5o"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged wzgk5vbjr"/><path class="agys1im8u clr-i-outline--badged clr-i-outline-path-4--badged"/><path class="clr-i-outline--badged clr-i-outline-path-5--badged ium_54bmq"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-6--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:cluster-outline-badged"} {...others} />);
}

export default Component;
