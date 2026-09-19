import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xhjy4vbpp.css';
import '../../css/h/h69crfbsf.css';
import '../../css/b/bo4bwebeu.css';
import '../../css/k/kdvcz7bsx.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsTestTubesNegative0)" class="cuyn6tgcc"><path class="xhjy4vbpp"/><path class="h69crfbsf"/><path class="bo4bwebeu"/><path clip-rule="evenodd" class="kdvcz7bsx"/></g><defs><clipPath id="healthiconsTestTubesNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:test-tubes-negative"} {...others} />);
}

export default Component;
