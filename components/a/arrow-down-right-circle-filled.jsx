import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n64r6pb3k.css';
import '../../css/f/f0fk9cbko.css';
import '../../css/t/t69nndb1t.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><g clip-rule="evenodd" class="d2kvgvbvc"><path class="n64r6pb3k"/><path class="f0fk9cbko"/><path class="t69nndb1t"/></g><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:arrow-down-right-circle-filled"} {...others} />);
}

export default Component;
