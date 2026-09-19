import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bsssxmnnx.css';
import '../../css/r/rp3ollbom.css';
import '../../css/o/on8g3mivh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="bsssxmnnx"/><path class="rp3ollbom"/><path class="on8g3mivh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:lightning-1-duo"} {...others} />);
}

export default Component;
