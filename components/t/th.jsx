import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cqefncc1k.css';
import '../../css/b/ba1ag2d6k.css';
import '../../css/m/m7ily_p1p.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="cqefncc1k"/><path class="ba1ag2d6k"/><path class="m7ily_p1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:th"} {...others} />);
}

export default Component;
