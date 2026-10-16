import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sn3pl_uym.css';
import '../../css/f/fpuyb9bst.css';
import '../../css/t/t5yehvb5w.css';
import '../../css/t/tr1qbin6e.css';
import '../../css/d/dfs3s5lnw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sn3pl_uym"/><rect transform="rotate(90 0 21.58)scale(-1 1)" class="fpuyb9bst"/><path class="t5yehvb5w"/><circle transform="rotate(90 14.4 11.96)" class="tr1qbin6e"/><path class="dfs3s5lnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:safe-box"} {...others} />);
}

export default Component;
