import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s51y5no9m.css';
import '../../css/q/q9d8uuvac.css';
import '../../css/h/h00g_jboa.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="s51y5no9m"/><path class="q9d8uuvac"/><path class="h00g_jboa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:layer-plus-duo"} {...others} />);
}

export default Component;
