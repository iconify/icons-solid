import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j42smtb5k.css';
import '../../css/j/juqffaboa.css';
import '../../css/r/rj0i6trac.css';
import '../../css/k/kc-5kvxmx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="j42smtb5k"/><path class="juqffaboa"/><path class="rj0i6trac"/><path class="kc-5kvxmx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrows-split-bold"} {...others} />);
}

export default Component;
