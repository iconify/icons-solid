import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dxkiu2b7k.css';
import '../../css/y/y2i7scbqh.css';
import '../../css/p/p8-k0bb1k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="dxkiu2b7k"/><path class="y2i7scbqh"/><path class="p8-k0bb1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:tencentcloud"} {...others} />);
}

export default Component;
