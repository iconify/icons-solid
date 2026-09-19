import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n5eehhzhn.css';
import '../../css/w/w2o2-_dok.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="n5eehhzhn"/><path class="w2o2-_dok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:crop-1"} {...others} />);
}

export default Component;
