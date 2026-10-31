import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ks0wm7bii.css';
import '../../css/v/v8dvmtblp.css';
import '../../css/m/ma3g_absj.css';
import '../../css/s/sn4f23bsw.css';
import '../../css/u/uazbzlb_w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ks0wm7bii"/><path class="v8dvmtblp"/><path class="ma3g_absj"/><path class="sn4f23bsw"/><path class="uazbzlb_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:anvil-pop"} {...others} />);
}

export default Component;
