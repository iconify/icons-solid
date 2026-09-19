import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mkwg-271v.css';
import '../../css/e/esw93etrt.css';
import '../../css/e/eofhxkbml.css';
import '../../css/i/io01yrznx.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="mkwg-271v"/><path class="esw93etrt"/><path class="eofhxkbml"/><path class="io01yrznx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:st"} {...others} />);
}

export default Component;
