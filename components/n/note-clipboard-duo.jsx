import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e8t_k5p9z.css';
import '../../css/u/uysy1bbiz.css';
import '../../css/o/omkqhvn3l.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="e8t_k5p9z"/><path class="uysy1bbiz"/><path class="omkqhvn3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:note-clipboard-duo"} {...others} />);
}

export default Component;
