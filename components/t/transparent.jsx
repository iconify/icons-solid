import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/d/d9_qihbxe.css';
import '../../css/x/x925mz3rg.css';
import '../../css/l/l_vga1bbv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="d9_qihbxe"/><path class="x925mz3rg"/><path class="l_vga1bbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:transparent"} {...others} />);
}

export default Component;
