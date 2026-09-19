import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d4kcgfa-d.css';
import '../../css/c/c-6_08brp.css';
import '../../css/h/hbnz1c8ej.css';
import '../../css/m/mzhrmtosr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d4kcgfa-d"/><path class="c-6_08brp"/><path clip-rule="evenodd" class="hbnz1c8ej"/><path class="mzhrmtosr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sort-alpha-down-outline"} {...others} />);
}

export default Component;
