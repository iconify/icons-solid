import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdl-n3bvk.css';
import '../../css/c/c5pkphbve.css';
import '../../css/d/dk5a-7n8b.css';
import '../../css/t/tx8o6v2lr.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="tdl-n3bvk"/><path class="c5pkphbve"/><path class="dk5a-7n8b"/><path class="tx8o6v2lr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:bb"} {...others} />);
}

export default Component;
