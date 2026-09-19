import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pmzqopkvq.css';
import '../../css/o/o4gk2is8h.css';
import '../../css/c/cumbvnb-s.css';
import '../../css/y/yjkv3pplf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="pmzqopkvq"/><path class="o4gk2is8h"/><path class="cumbvnb-s"/><path class="yjkv3pplf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrows-exchange-bold"} {...others} />);
}

export default Component;
