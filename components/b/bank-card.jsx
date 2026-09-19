import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/y/yivp1733o.css';
import '../../css/d/d9e9ssorw.css';
import '../../css/z/zh8ha065f.css';
import '../../css/q/q6-8-fbzp.css';
import '../../css/m/mbjqc6nbm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="yivp1733o"/><path class="d9e9ssorw"/><path class="zh8ha065f"/><path class="q6-8-fbzp"/><path class="mbjqc6nbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bank-card"} {...others} />);
}

export default Component;
