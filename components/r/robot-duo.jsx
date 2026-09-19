import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rdgd1mbja.css';
import '../../css/m/m39p55xqg.css';
import '../../css/e/e5k6yebuc.css';
import '../../css/g/gexw8i-wt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="rdgd1mbja"/><path class="m39p55xqg"/><path class="e5k6yebuc"/><path class="gexw8i-wt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:robot-duo"} {...others} />);
}

export default Component;
