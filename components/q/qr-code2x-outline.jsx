import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ufp8wl_cw.css';
import '../../css/o/o9_iiq7is.css';
import '../../css/f/fqxe8mmxs.css';
import '../../css/a/acpwzpyze.css';
import '../../css/x/xb18t45nt.css';
import '../../css/d/di8cecc-i.css';
import '../../css/o/otr13tbix.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="ufp8wl_cw"/><path clip-rule="evenodd" class="o9_iiq7is"/><path class="fqxe8mmxs"/><path class="acpwzpyze"/><path class="xb18t45nt"/><path clip-rule="evenodd" class="di8cecc-i"/><path class="otr13tbix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:qr-code2x-outline"} {...others} />);
}

export default Component;
