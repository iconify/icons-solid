import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/on1vlkxau.css';
import '../../css/l/lszyav9uv.css';
import '../../css/p/p7g20qwcv.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsFemaleCondomNegative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="on1vlkxau"/><path class="lszyav9uv"/><path clip-rule="evenodd" class="p7g20qwcv"/></g><defs><clipPath id="healthiconsFemaleCondomNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:female-condom-negative"} {...others} />);
}

export default Component;
