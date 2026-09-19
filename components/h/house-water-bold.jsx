import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pf1ohtq-j.css';
import '../../css/t/tv_kswb8i.css';
import '../../css/b/b536a6bsc.css';
import '../../css/a/a3t_5yinj.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pf1ohtq-j"/><path class="tv_kswb8i"/><path class="b536a6bsc"/><path class="a3t_5yinj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:house-water-bold"} {...others} />);
}

export default Component;
