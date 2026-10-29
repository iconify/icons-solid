import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fxisi3e-m.css';
import '../../css/n/nijlxnzfg.css';
import '../../css/n/n10g9-b5w.css';
import '../../css/r/rpjj2abjl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="fxisi3e-m wm-k"/><path class="nijlxnzfg wm-a"/><path class="n10g9-b5w wm-k"/><path class="rpjj2abjl wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-woman-sketch"} {...others} />);
}

export default Component;
