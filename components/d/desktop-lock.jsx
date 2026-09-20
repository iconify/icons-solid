import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/y/ys28wsbhb.css';
import '../../css/e/eqr_qf8up.css';
import '../../css/u/uickdp42r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="ys28wsbhb"/><path class="eqr_qf8up"/><path class="uickdp42r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:desktop-lock"} {...others} />);
}

export default Component;
