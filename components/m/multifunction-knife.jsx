import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fkuzt-b3i.css';
import '../../css/c/c0lwb7bgm.css';
import '../../css/k/kiy1bvb5z.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="bi12bsetm"><path class="fkuzt-b3i"/><path class="c0lwb7bgm"/><path class="kiy1bvb5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:multifunction-knife"} {...others} />);
}

export default Component;
