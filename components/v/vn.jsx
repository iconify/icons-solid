import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s04qjzzwi.css';
import '../../css/f/fk_b2k66b.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="s04qjzzwi"/><path class="fk_b2k66b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:vn"} {...others} />);
}

export default Component;
