import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j6hlmh-yv.css';
import '../../css/b/bxpvs5bwt.css';
import '../../css/y/ylpji7cqa.css';
import '../../css/m/m-r32nl1u.css';
import '../../css/o/o54ffy1qd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j6hlmh-yv"/><path class="bxpvs5bwt"/><rect class="ylpji7cqa"/><rect class="m-r32nl1u"/><path clip-rule="evenodd" class="o54ffy1qd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:note-medical"} {...others} />);
}

export default Component;
