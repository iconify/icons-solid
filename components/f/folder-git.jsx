import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bk5g6vb6i.css';
import '../../css/z/z1xltzbek.css';
import '../../css/v/vpe84bb3m.css';
import '../../css/b/btifitbvi.css';
import '../../css/h/hvbmw2s_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bk5g6vb6i"/><path class="z1xltzbek"/><path class="vpe84bb3m"/><circle class="btifitbvi"/><circle class="hvbmw2s_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-git"} {...others} />);
}

export default Component;
