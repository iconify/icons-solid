import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpn0phb5b.css';
import '../../css/q/q7z_bo_ba.css';
import '../../css/l/lbqhoqruw.css';
import '../../css/f/f-w1ufbmx.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="kpn0phb5b"/><circle class="q7z_bo_ba"/><circle class="lbqhoqruw"/><path class="f-w1ufbmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:toilet"} {...others} />);
}

export default Component;
