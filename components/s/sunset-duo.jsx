import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kew7uwb2k.css';
import '../../css/e/eo8q52bph.css';
import '../../css/y/yvf29-bfi.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="kew7uwb2k"/><path class="eo8q52bph"/><path class="yvf29-bfi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sunset-duo"} {...others} />);
}

export default Component;
