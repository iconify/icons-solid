import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f64wa0bzh.css';
import '../../css/f/f0a0jwb7h.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="f64wa0bzh"/><path class="f0a0jwb7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:folder-music"} {...others} />);
}

export default Component;
