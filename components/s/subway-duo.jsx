import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vou3r2ifc.css';
import '../../css/j/joxafp8fj.css';
import '../../css/q/q7p9fvw2x.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="vou3r2ifc"/><path class="joxafp8fj"/><path class="q7p9fvw2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:subway-duo"} {...others} />);
}

export default Component;
