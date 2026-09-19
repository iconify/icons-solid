import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t8ij2fbdm.css';
import '../../css/q/q6_pmxs6i.css';
import '../../css/a/alq95cbaz.css';
import '../../css/c/cjb0rbclx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="t8ij2fbdm"/><path clip-rule="evenodd" class="q6_pmxs6i"/><path class="alq95cbaz"/><path class="cjb0rbclx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:joker"} {...others} />);
}

export default Component;
