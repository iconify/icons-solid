import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w7nmvacqh.css';
import '../../css/a/a930znm6s.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="w7nmvacqh"/><path class="a930znm6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:store"} {...others} />);
}

export default Component;
