import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ncq4rhxwl.css';
import '../../css/i/ihl9zebzu.css';
import '../../css/f/fg8vwubln.css';
import '../../css/u/undon46og.css';
import '../../css/c/c590xtbuw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ncq4rhxwl"/><path class="ihl9zebzu"/><path clip-rule="evenodd" class="fg8vwubln"/><path class="undon46og"/><path clip-rule="evenodd" class="c590xtbuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:rdt-result-pv-invalid"} {...others} />);
}

export default Component;
