import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/uf8-wnb5o.css';
import '../../css/c/cbuvstbnd.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jg897qbgt.css';
import '../../css/r/r3o12cznv.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="h01tyzbfu"><circle class="uf8-wnb5o"/><path class="cbuvstbnd"/></g><g class="cuyn6tgcc"><circle class="jg897qbgt"/><circle class="r3o12cznv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:smile-slight-stroke-12"} {...others} />);
}

export default Component;
