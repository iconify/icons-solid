import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hqgyddbgl.css';
import '../../css/j/jbr891p-c.css';
import '../../css/c/c2dyrzb5m.css';
import '../../css/c/cdju2hbdr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hqgyddbgl"/><path class="jbr891p-c"/><path clip-rule="evenodd" class="c2dyrzb5m"/><path class="cdju2hbdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:mold-outline"} {...others} />);
}

export default Component;
