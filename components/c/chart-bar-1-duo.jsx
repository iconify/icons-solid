import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cye19typo.css';
import '../../css/h/hkiion73v.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="cye19typo"/><path class="hkiion73v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:chart-bar-1-duo"} {...others} />);
}

export default Component;
