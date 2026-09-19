import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qk25gibme.css';
import '../../css/l/lbun2ugwc.css';
import '../../css/x/xlfsq7bzy.css';
import '../../css/e/eff0wfl9s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="qk25gibme"/><path class="lbun2ugwc"/><path class="xlfsq7bzy"/><path clip-rule="evenodd" class="eff0wfl9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:wifi"} {...others} />);
}

export default Component;
