import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c9ugt2t7n.css';
import '../../css/d/dbldgwbon.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="c9ugt2t7n"/><path class="dbldgwbon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:flip-1"} {...others} />);
}

export default Component;
