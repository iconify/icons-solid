import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5oh21qle.css';
import '../../css/f/fweop44zq.css';
import '../../css/g/g57x7ynmz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="t5oh21qle"/><path class="fweop44zq"/><path class="g57x7ynmz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-stand-duo"} {...others} />);
}

export default Component;
