import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pedgsybcp.css';
import '../../css/f/f8-pkcc1c.css';
import '../../css/e/en8bqbcrl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="pedgsybcp"/><path class="f8-pkcc1c"/><path class="en8bqbcrl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:flip"} {...others} />);
}

export default Component;
