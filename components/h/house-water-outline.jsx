import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/ceaub_u1f.css';
import '../../css/l/l9lejiboz.css';
import '../../css/d/dpbi1eb5g.css';
import '../../css/h/hwy146b6k.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ceaub_u1f"/><path class="l9lejiboz"/><path class="dpbi1eb5g"/><path class="hwy146b6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:house-water-outline"} {...others} />);
}

export default Component;
