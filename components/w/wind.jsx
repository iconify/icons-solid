import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rffsk5b0q.css';
import '../../css/x/xj3b16los.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="rffsk5b0q"/><path class="xj3b16los"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:wind"} {...others} />);
}

export default Component;
