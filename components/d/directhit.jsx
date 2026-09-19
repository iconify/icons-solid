import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p00qr2apg.css';
import '../../css/b/b3og-kupp.css';
import '../../css/u/u4rzombrs.css';
import '../../css/l/lusnl1b9v.css';
import '../../css/k/koluruhol.css';
import '../../css/a/ak7me7bwj.css';
import '../../css/f/f4vxc-b0f.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="p00qr2apg"/><path class="b3og-kupp"/><path class="u4rzombrs"/><path class="lusnl1b9v"/><circle class="koluruhol"/><path class="ak7me7bwj"/><path class="f4vxc-b0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:directhit"} {...others} />);
}

export default Component;
