import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zvk8vqbhu.css';
import '../../css/t/tqg5t2iuz.css';
import '../../css/r/rs4b7ub-v.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zvk8vqbhu"/><path clip-rule="evenodd" class="tqg5t2iuz"/><path class="rs4b7ub-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:cog-outline"} {...others} />);
}

export default Component;
