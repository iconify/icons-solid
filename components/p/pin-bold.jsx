import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dm6lxrfug.css';
import '../../css/n/n94865b_n.css';
import '../../css/f/fbiosebgy.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="dm6lxrfug"/><path clip-rule="evenodd" class="n94865b_n"/><path class="fbiosebgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:pin-bold"} {...others} />);
}

export default Component;
