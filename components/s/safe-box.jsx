import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_2mwcclz.css';
import '../../css/w/wsbc11bop.css';
import '../../css/t/tr1qbin6e.css';
import '../../css/d/dfs3s5lnw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i_2mwcclz"/><path class="wsbc11bop"/><circle class="tr1qbin6e"/><path class="dfs3s5lnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:safe-box"} {...others} />);
}

export default Component;
