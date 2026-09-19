import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j5nlpcp6m.css';
import '../../css/g/ggk70abwq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="j5nlpcp6m"/><path class="ggk70abwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:pen-fountain"} {...others} />);
}

export default Component;
