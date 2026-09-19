import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dhg4gt1-q.css';
import '../../css/v/v9v74fa0z.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="dhg4gt1-q"/><path class="v9v74fa0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:reel-film"} {...others} />);
}

export default Component;
