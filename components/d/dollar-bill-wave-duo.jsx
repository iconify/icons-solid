import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lyxil9baw.css';
import '../../css/t/tylp8-t1y.css';
import '../../css/y/y_ry23blx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="lyxil9baw"/><path class="tylp8-t1y"/><path class="y_ry23blx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:dollar-bill-wave-duo"} {...others} />);
}

export default Component;
