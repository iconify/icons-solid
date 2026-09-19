import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z5pt0aclp.css';
import '../../css/g/g3u0jliin.css';
import '../../css/b/bj1z3ub6e.css';
import '../../css/h/hcbngtbcs.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="z5pt0aclp"/><path class="g3u0jliin"/><path class="bj1z3ub6e"/><path class="hcbngtbcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:baseball-1-bold"} {...others} />);
}

export default Component;
