import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bg3v29b8u.css';
import '../../css/n/nhdmkwpcm.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsINoteActionNegative0)" class="cuyn6tgcc"><path class="bg3v29b8u"/><path clip-rule="evenodd" class="nhdmkwpcm"/></g><defs><clipPath id="healthiconsINoteActionNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:i-note-action-negative"} {...others} />);
}

export default Component;
