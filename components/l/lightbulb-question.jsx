import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lctctxbeg.css';
import '../../css/b/b6tr8jbnr.css';
import '../../css/c/ckgdd6qfc.css';
import '../../css/n/nnryslbng.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lctctxbeg"/><path class="b6tr8jbnr"/><path class="ckgdd6qfc"/><path class="nnryslbng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:lightbulb-question"} {...others} />);
}

export default Component;
