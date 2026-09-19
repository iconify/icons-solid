import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r828l5b8c.css';
import '../../css/e/ept_tj7oo.css';
import '../../css/c/cy8y98b1l.css';
import '../../css/k/k_xqplfzx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="r828l5b8c"/><path class="ept_tj7oo"/><path class="cy8y98b1l"/><path class="k_xqplfzx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:chess-one"} {...others} />);
}

export default Component;
