import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a__s2g6zp.css';
import '../../css/u/ure5rybbd.css';
import '../../css/i/i-nfk4xyp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="a__s2g6zp"><path class="ure5rybbd"/><path class="i-nfk4xyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:shopping-bag-bold"} {...others} />);
}

export default Component;
