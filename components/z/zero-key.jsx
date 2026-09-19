import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3g_w1qsa.css';
import '../../css/k/klsk1sb8v.css';
import '../../css/h/hvfwvmb8r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="t3g_w1qsa"><rect class="klsk1sb8v"/><rect class="hvfwvmb8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:zero-key"} {...others} />);
}

export default Component;
