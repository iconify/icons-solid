import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/atmck8b3k.css';
import '../../css/l/lqtbpobii.css';
import '../../css/b/b3sasddpo.css';
import '../../css/k/kdz2ny_0g.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="atmck8b3k"/><path class="lqtbpobii"/><path class="b3sasddpo"/><path class="kdz2ny_0g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:watch-duo"} {...others} />);
}

export default Component;
