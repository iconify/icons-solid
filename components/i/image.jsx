import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y49vkvlfv.css';
import '../../css/e/elzzhttxr.css';
import '../../css/c/ciumniaxp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><rect class="y49vkvlfv"/><path clip-rule="evenodd" class="elzzhttxr"/><path class="ciumniaxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:image"} {...others} />);
}

export default Component;
