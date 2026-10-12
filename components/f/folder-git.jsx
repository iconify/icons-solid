import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/inm-bkb0t.css';
import '../../css/c/cr9ml0xvm.css';
import '../../css/v/vpe84bb3m.css';
import '../../css/b/btifitbvi.css';
import '../../css/h/hvbmw2s_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="inm-bkb0t"/><path class="cr9ml0xvm"/><path class="vpe84bb3m"/><circle class="btifitbvi"/><circle class="hvbmw2s_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-git"} {...others} />);
}

export default Component;
