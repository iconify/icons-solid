import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yz8-y-bjf.css';
import '../../css/p/pbnloebki.css';
import '../../css/r/rq_p60btc.css';
import '../../css/k/kxs5w7bqh.css';
import '../../css/u/unf9_kdmv.css';
import '../../css/u/u--uwsb8y.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yz8-y-bjf"/><path class="pbnloebki"/><path class="rq_p60btc"/><path clip-rule="evenodd" class="kxs5w7bqh"/><path class="unf9_kdmv"/><path clip-rule="evenodd" class="u--uwsb8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:certificate-scroll-bold"} {...others} />);
}

export default Component;
