import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nqqj806mv.css';
import '../../css/b/b-us7aczi.css';
import '../../css/r/rkoiybc7f.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="nqqj806mv"/><path class="b-us7aczi"/><path class="rkoiybc7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:ruler-combined-duo"} {...others} />);
}

export default Component;
