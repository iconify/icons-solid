import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/c/c-0f-jbvg.css';
import '../../css/a/axqh93tjk.css';
import '../../css/a/ajdyn4bhd.css';
import '../../css/q/q9dlovbgr.css';
import '../../css/n/nq3ax75zj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="c-0f-jbvg"/><path class="axqh93tjk"/><path class="ajdyn4bhd"/><path class="q9dlovbgr"/><path class="nq3ax75zj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:multi-function-knife"} {...others} />);
}

export default Component;
