import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2fzm2btn.css';
import '../../css/y/y740_r6rb.css';
import '../../css/g/g_7g0l_kn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h2fzm2btn"/><path class="y740_r6rb"/><path class="g_7g0l_kn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mobile-charger-48"} {...others} />);
}

export default Component;
