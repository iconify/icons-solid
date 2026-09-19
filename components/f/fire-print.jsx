import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/x/x5dw6db5g.css';
import '../../css/i/iu2t7stsp.css';
import '../../css/v/vm2olqtiv.css';
import '../../css/m/mociiybqy.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="x5dw6db5g"/><path clip-rule="evenodd" class="iu2t7stsp"/></g><path clip-rule="evenodd" class="vm2olqtiv"/><path clip-rule="evenodd" class="mociiybqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:fire-print"} {...others} />);
}

export default Component;
