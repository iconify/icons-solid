import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vmnknnmuy.css';
import '../../css/p/pg98zb21c.css';
import '../../css/i/imszhdckf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="vmnknnmuy"/><path class="pg98zb21c"/><path class="imszhdckf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bells-bold"} {...others} />);
}

export default Component;
