import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e0sxuqh5g.css';
import '../../css/o/ol6mscbgo.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="e0sxuqh5g"/><path class="ol6mscbgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:volume-3"} {...others} />);
}

export default Component;
