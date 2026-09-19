import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/n/nf2xt-brq.css';
import '../../css/f/f34tbbcbk.css';
import '../../css/g/gxs0dm8al.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="nf2xt-brq"/><rect class="f34tbbcbk"/><rect class="gxs0dm8al"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:divide"} {...others} />);
}

export default Component;
