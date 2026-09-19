import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x0ijz3_eb.css';
import '../../css/v/vuo5f7smn.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="x0ijz3_eb"/><path class="vuo5f7smn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:windsock-duo"} {...others} />);
}

export default Component;
