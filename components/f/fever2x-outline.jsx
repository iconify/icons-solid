import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e64zggb9q.css';
import '../../css/q/qa1pr5opa.css';
import '../../css/e/ef0iey_7q.css';
import '../../css/n/nvhvr-q_f.css';
import '../../css/e/ew0b2ucae.css';
import '../../css/m/mc404gcyp.css';
import '../../css/a/a6vr1hunw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e64zggb9q"/><path class="qa1pr5opa"/><path clip-rule="evenodd" class="ef0iey_7q"/><path class="nvhvr-q_f"/><path clip-rule="evenodd" class="ew0b2ucae"/><path clip-rule="evenodd" class="mc404gcyp"/><path class="a6vr1hunw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:fever2x-outline"} {...others} />);
}

export default Component;
