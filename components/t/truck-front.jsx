import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a51i1igho.css';
import '../../css/e/edrl9_xwf.css';
import '../../css/w/wnapsbb4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a51i1igho"/><path class="edrl9_xwf"/><path class="wnapsbb4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:truck-front"} {...others} />);
}

export default Component;
