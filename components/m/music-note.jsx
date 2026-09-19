import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sicc9-b3w.css';
import '../../css/x/x2mt7mwiz.css';
import '../../css/l/l9xqvz5sp.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="sicc9-b3w"/><path class="x2mt7mwiz"/><path class="l9xqvz5sp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:music-note"} {...others} />);
}

export default Component;
