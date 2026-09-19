import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zvl9n7rdn.css';
import '../../css/a/a_dtw8drj.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="zvl9n7rdn"/><path clip-rule="evenodd" class="a_dtw8drj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:layer-backward-bold"} {...others} />);
}

export default Component;
