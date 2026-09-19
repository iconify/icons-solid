import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/af80qybrk.css';
import '../../css/t/tv_kswb8i.css';
import '../../css/b/b536a6bsc.css';
import '../../css/a/a3t_5yinj.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="af80qybrk"/><path class="tv_kswb8i"/><path class="b536a6bsc"/><path class="a3t_5yinj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:house-fire-bold"} {...others} />);
}

export default Component;
